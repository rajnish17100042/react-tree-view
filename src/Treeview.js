import React,{useState} from 'react';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';



const Treeview=()=>{
   
    const datasource=[
       {
        type:'Employees',
        collapsed:false,
        people:[
            {
              name:"name1",
              age:30,
              sex:"male",
              role:"developer",
              collapsed:false,  
            },
            {
                name:'name2',
                age:32,
                sex:'male',
                role:'tester',
                collapsed:false,
            }
        ]
       },
       {
           type:'CEO',
           collapsed:false,
           people:[
            {
                name:'name3',
                age:50,
                sex:'female',
                role:'Code Review',
                collapsed:false,
            }
           ]
       }

    ];

    return (
        <div className="MainDiv">
      <div className="container">
          {
              datasource.map((node,i)=>{
                  const type=node.type;
                  const label=<span className="node">{type}</span>;
                  return(
                     <TreeView
                     key={type+'|' + i}
                     nodeLabel={label}
                     defaultCollapsed={true}
                     >
                      {node.people.map((person)=>{
                          const label2=<span className="node">{person.name}</span>;
                          return (
                              <TreeView
                              nodeLabel={label2}
                              key={person.name}
                              defaultCollapsed={true}
                              >
                                  <div className="info">age:{person.age}</div>
                                  <div className="info">sex:{person.sex}</div>
                                  <div className="info">role:{person.role}</div>

                              </TreeView>
                          );
                        })}     
                        </TreeView>
                  );
              })}
      </div>


        </div>
    );

}

export default Treeview;