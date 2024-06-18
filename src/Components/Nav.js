import React, { useEffect, useState } from 'react';
import './Nav.css';

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
    const className = "level-" + node.depth;
    return (
        <li className={className} >
            {node.name}
        </li>
        );      
  }

  const rootClassName = "level-" + node.depth;
  const childClassName = "level-" + node.depth;

  return (
    <li >
      <div className={'node ' + rootClassName}>
        {node.name}
      </div>
      <ul >
        {node.children.map(function(child) {
           return <TreeNode key={child.id} node={child} className={childClassName} />
        })}
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
    <div className='nav-container'>
      {data ? (
        <ul className='category' >
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
