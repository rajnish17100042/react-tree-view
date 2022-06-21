import React ,{useState,useEffect} from 'react'


const CustomDataTable = (props) => {
    const [tableData,setTableData]=useState(props.data);
    const [order,setOrder]=useState("ASC");
    const [searchTerm,setSearchTerm]=useState('');

    // console.log(props);

   const sorting=(col)=>{
    if(col.type!=='number'){
        if(order==="ASC"){
            const sorted=[...tableData].sort((a,b)=>
              a[col.attr].toLowerCase()>b[col.attr].toLowerCase() ? 1:-1
            );
            
            setTableData(sorted);
            setOrder("DSC");
         }
         if(order==="DSC"){
          const sorted=[...tableData].sort((a,b)=>
            a[col.attr].toLowerCase()<b[col.attr].toLowerCase() ? 1:-1
          );
          setTableData(sorted);
          setOrder("ASC");
       }
    }else{
        if(order==="ASC"){
            const sorted=[...tableData].sort((a,b)=>
              b[col.attr]-a[col.attr]
            );
            
            setTableData(sorted);
            setOrder("DSC");
         }
         if(order==="DSC"){
          const sorted=[...tableData].sort((a,b)=>
            a[col.attr]-b[col.attr]
          );
          setTableData(sorted);
          setOrder("ASC");
       }
    }
    
   }
   

   const filterDataBySearch = (searchAttr,val,searchTerm) => {
    let indexArr = [];
    let isFound = false;
    searchAttr.forEach((ele,index) => {
        if(typeof ele === 'string')  indexArr.push(index);
    });

    // console.log(indexArr);

    indexArr.forEach((index) => {
        if(!isFound && isNaN(val[searchAttr[index]])) {
            if(val[searchAttr[index]].toLowerCase().includes(searchTerm))  isFound = true;
        }else if(!isNaN(val[searchAttr[index]])){
            if(val[searchAttr[index]] == searchTerm)  isFound = true;
        }
    })

    return isFound;
   }

    return (
    <>
       {/* <div className="search-bar">
         <input type="text" placeholder="Search.." onChange={(e)=>{setSearchTerm(e.target.value)}}></input>
        </div> */}
         <div className="search-bar">
            <i className="fa fa-search"></i>
            <input type="text" className="form-control " placeholder="Search Tasks..." onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        </div>
      <table>
        <thead>
            <tr>
                <th></th>
             {props.cols.length>0?(

                props.cols.map((col,index)=>{
                    return(
                        <th key={index} onClick={col.sort?()=>{sorting(col)}:null}>{col.attr}</th>
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
                   }else if(
                    // val[props.searchAttr.map((attr,index)=>index)].
                    // toLowerCase().includes(searchTerm.toLowerCase())
                    // val[props.searchAttr[2]].toLowerCase().includes(searchTerm.toLowerCase());

                        filterDataBySearch(props.searchAttr,val,searchTerm.toLocaleLowerCase())
                    ){
                    return val
                   }
                   
                  
                }).map((row,index)=>{
                    return(
                        <tr key={index}>
                            <td className="table-icon" onClick={()=>{console.log(row)}}><i className={props.icon}></i></td>
                            {props.cols.map((col,index2)=>{
                                return(
                                // <td key={index2}>{ col == "completed" ? (row[col] ? "true" : "false") :row[col] }</td>
                                <td key={index2}>{ col == "completed" ? (row[col.attr] ? "true" : "false") :row[col.attr] }</td>
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