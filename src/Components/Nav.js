import React, { useEffect, useState } from 'react';
import './Nav.css';

const transformData = (apiData) => {
  const map = {};
  const rootNodes = [];

  apiData.forEach(item => {
    map[item.id] = { ...item.attributes, id: item.id, children: [], expanded: false }; 
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
  const [expanded, setExpanded] = useState(false); 

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  if (!node.children || node.children.length === 0) {
    const className = "level-" + node.depth;
    return (
        
      <li className={className} >
        {node.name}
      </li>
    );      
  }

  const rootClassName = "level-" + node.depth + (expanded ? ' expanded' : '');
  const childClassName = "level-" + node.depth;
  
  return (
    <li>
      <div className={'node ' + rootClassName} onClick={toggleExpanded} onMouseEnter={toggleExpanded} onMouseLeave={toggleExpanded}>
        {node.name}
      </div>

      
      <ul className={'child-list ' + (expanded ? 'expanded' : '')} >
      
      
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
    <div className='nav-container'>
      {data ? (
        <div>
        <ul className='category'>
          
          {data.map(category => (
            
            <TreeNode key={category.id} node={category} />
            
          ))}
          
        </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Nav;
