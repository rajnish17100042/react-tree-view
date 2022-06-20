import React ,{useState,useEffect} from 'react'


const CustomDataTable = (props) => {
    const [tableData,setTableData]=useState(props.data);
    const [order,setOrder]=useState("ASC");
    const [searchTerm,setSearchTerm]=useState('');

    console.log(props);

   const sorting=(col)=>{
       if(order==="ASC"){
          const sorted=[...tableData].sort((a,b)=>
            a[col].toLowerCase()>b[col].toLowerCase() ? 1:-1
          );
          
          setTableData(sorted);
          setOrder("DSC");
       }
       if(order==="DSC"){
        const sorted=[...tableData].sort((a,b)=>
          a[col].toLowerCase()<b[col].toLowerCase() ? 1:-1
        );
        setTableData(sorted);
        setOrder("ASC");
     }
   }
   

    return (
    <>
       <div className="search-bar">
         <input type="text" placeholder="Search.." onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        </div>
      <table>
        <thead>
            <tr>
                <th></th>
             {props.cols.length>0?(

                props.cols.map((col,index)=>{
                    return(
                        <th key={index} onClick={()=>{sorting(col)}}>{col}</th>
                    )
                })
             ):'error'}   
            
            </tr>
        </thead>
        <tbody>
           
        {tableData.length>0?(
                tableData.filter((val)=>{
                    if(searchTerm==""){  
                        return val;
                    }else if(val[props.searchAttr].toLowerCase().includes(searchTerm.toLowerCase())){
                        return val

                    }
                }).map((row,index)=>{
                    return(
                        <tr key={index}>
                            <td className="table-icon" onClick={()=>{console.log(row)}}><i className={props.icon}></i></td>
                            {props.cols.map((col,index2)=>{
                                return(
                                // <td key={index2}>{ col == "completed" ? (row[col] ? "true" : "false") :row[col] }</td>
                                <td key={index2}>{ col == "completed" ? (row[col] ? "true" : "false") :row[col] }</td>
                                )
                            })}
                        </tr>
                    )
                })
             ):'error'} 

           
         
        </tbody>

        {/* <tfoot>
        <tr>
             {props.cols.length>0?(
                props.cols.map((col,index)=>{
                    return(
                        <th key={index}>{col}</th>
                    )
                })
             ):'error'}   
            
            </tr>

        </tfoot> */}

      </table>


    </>
  )
}

export default CustomDataTable