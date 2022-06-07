import React from "react";

import Tree from "./Tree";
import list_to_tree from './Tree/list_to_tree_conversion';

var entries = [{
  "id": "12",
  "parentId": "0",
  "text": "Man",
  "level": "1",
  "children": null
},
{
  "id": "6",
  "parentId": "12",
  "text": "Boy",
  "level": "2",
  "children": null
},
{
  "id": "7",
  "parentId": "12",
  "text": "Other",
  "level": "2",
  "children": null
},
{
  "id": "9",
  "parentId": "0",
  "text": "Woman",
  "level": "1",
  "children": null
},
{
  "id": "11",
  "parentId": "9",
  "text": "Girl",
  "level": "2",
  "children": null
}
];

const treeData=list_to_tree(entries);
console.log(treeData);

const treeData1 = [
  {
    key: "0",
    label: "Layer1",
    
    title: "layer1",
    children: [
      {
        key: "0-0",
        label: "Layer1.1",
        
        title: "layer1.1",
        children: [
          {
            key: "0-1-1",
            label: "Layer1.1.1",
           
            title: "layer1.1.1",
          },
          {
            key: "0-1-2",
            label: "Layer1.1.2",
           
            title: "layer1.1.2",
          },
          {
            key: "0-1-3",
            label: "Layer1.1.3",
          
            title: "layer1.1.3",
          },
          {
            key: "0-1-4",
            label: "Layer1.1.4",
           
            title: "layer1.1.4",
          },
        ],
      },
    ],
  },
  {
    key: "1",
    label: "Layer2",
  
    title: "layer2r",
    children: [
      {
        key: "1-0",
        label: "Layer2.1",
       
        title: "layer2.1",
      },
      {
        key: "0-0",
        label: "Layer2.2",
        
        title: "layer2.2",
      },
    ],
  },
  {
    key: "2",
    label: "Layer3",
    
    title: "layer3",
    children: [],
  },
];

const Treeview2 = () => {
  return (
    <>
     

      <div className="row">
        <div className="col text-center">
          <h2>Tree Visualization component</h2>
          <p className="mt-3">
            <div className="row mt-3 d-flex justify-content-center">
              <div className="col-lg-8 text-left text-dark">
                <Tree data={treeData} />
              </div>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Treeview2;