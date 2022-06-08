import 'antd/dist/antd.css';
import { Tree } from 'antd';
import React from 'react';
import list_to_tree from './Tree/list_to_tree_conversion';




var entries = [{
    "id": "12",
    "parentId": "0",
    "title": "GSM",
  },
  {
    "id": "6",
    "parentId": "12",
    "title": "Layer1",
  },
  {
    "id": "7",
    "parentId": "12",
    "title": "Layer2",
  },
  {
    "id": "9",
    "parentId": "0",
    "title": "CDMA",
  },
  {
    "id": "11",
    "parentId": "9",
    "title": "Layer1",
  },
  {
    "id": "13",
    "parentId": "14",
    "title": "Layer1",
  },
  {
    "id": "14",
    "parentId": "0",
    "title": "FPG",
  },
  {
    "id": "15",
    "parentId": "14",
    "title": "Layer2",
  },
  {
    "id": "16",
    "parentId": "14",
    "title": "Layer3",
  },
  {
    "id": "17",
    "parentId": "14",
    "title": "Layer4",
  }
  ];
  
const treeData=list_to_tree(entries);
console.log(treeData);
// const treeData1 = [
//   {
//     title: 'parent 1',
//     id: '0-0',
//     children: [
//       {
//         title: 'parent 1-0',
//         id: '0-0-0',
       
//         children: [
//           {
//             title: 'leaf',
//             id: '0-0-0-0',
            
//           },
//           {
//             title: 'leaf',
//             id: '0-0-0-1',
//           },
//         ],
//       },
//       {
//         title: 'parent 1-1',
//         id: '0-0-1',
//         children: [
//           {
//             title:'span',
//             id: '0-0-1-0',
//           },
//         ],
//       },
//     ],
//   },
// ];

const TreeViewAntDesign = () => {
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  return (
    <Tree
      checkable
    //   defaultExpandedKeys={['0-0-0', '0-0-1']}
    //   defaultSelectedKeys={['0-0-0', '0-0-1']}
    //   defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  );
};

export default TreeViewAntDesign;