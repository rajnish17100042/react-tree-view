import React ,{useState,useEffect} from 'react'


const CustomDataTable = (props) => {
    const [tableData,setTableData]=useState(props.data);
    const [order,setOrder]=useState("ASC");
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
      <h1>Custom DataTable</h1>
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
                tableData.map((row,index)=>{
                    return(
                        <tr key={index}>
                            <td className="table-icon" onClick={()=>{console.log(row)}}><i className="fa-solid fa-greater-than"></i></td>
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