
import React, { useState, useEffect, useRef } from 'react';
import { Tree } from 'primereact/tree';

import { getDefaultNormalizer } from '@testing-library/react';

const PrimeReactTree = () => {
    const [nodes, setNodes] = useState(null);
    const [selectedKeys3, setSelectedKeys3] = useState(null);
    const toast = useRef(null);
   
  
    const getData=async()=>{
        const response=await fetch('https://www.primefaces.org/primereact/data/treenodes.json');
        const result=await response.json();
        console.log(result);
        setNodes(result);
    }

    useEffect(() => {
       getData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    return (
        <div>
            <div className="card">
                <h5>Checkbox Selection</h5>
                {nodes !='undefined'?(
                   <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys3} onSelectionChange={e => setSelectedKeys3(e.value)} />
                ):''}
                
            </div>
        </div>
    )
}
                 
export default PrimeReactTree;
