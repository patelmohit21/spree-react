import React, { useEffect, useState } from 'react';

const transformData = (apiData) => {
  const map = {};
  const rootNodes = [];

  apiData.forEach(item => {
    map[item.id] = { ...item.attributes, id: item.id, children: [] };
  });

  apiData.forEach(item => {
    if (item.relationships.parent.data) {
      const parentId = item.relationships.parent.data.id;
      if (map[parentId]) {
        map[parentId].children.push(map[item.id]);
      }
    } else {
      rootNodes.push(map[item.id]);
    }
  });

  return rootNodes;
};

const TreeNode = ({ node }) => {
  if (!node.children || node.children.length === 0) {
    return (
      <li >
        {node.name}
      </li>
    );
  }

  return (
    <li >
      <div style={{backgroundColor: "lightblue"}}>
        {node.name}
      </div>
      <ul >
        {node.children.map(child => (
          <TreeNode key={child.id} node={child} />
        ))}
      </ul>
    </li>
  );
};

const Nav = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/v2/storefront/taxons.json", {
      mode: "cors"
    })
      .then(response => response.json())
      .then(responseData => {
        const transformedData = transformData(responseData.data);
        setData(transformedData);
      });
  }, []);

  return (
    <div>
      <h2>Nav Items</h2>
      {data ? (
        <ul >
          {data.map(category => (
            <TreeNode key={category.id} node={category} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Nav;
