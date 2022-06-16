import React,{useState,useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
const BootstrapDataTable = () => {
    const [data,setData]=useState([]);

const getData=async()=>{
   const response= await fetch('https://jsonplaceholder.typicode.com/comments');
   const result=await response.json();
   console.log(result);
   setData(result);
}
   useEffect(()=>{
    getData();
   },[]);

    const columns=[
        {dataField:'id',text:'Id',sort:true},
        {dataField:'name',text:'Name',sort:true},
        {dataField:'email',text:'Email',sort:true},
        {dataField:'body',text:'Body',sort:true},
        
    ];

    const pagination=paginationFactory({
      page:1,
      sizePerPage:5,
      lastPageText:'>>',
      firstPageText:'<<',
      nextPageText:'>',
      prePageText:'<',
      showTotal:true,
      alwaysShowAllBtns:true,
      onPageChange:function(page,sizePerPage){
       console.log('page',page);
       console.log('sizePerPage',sizePerPage);
      },
      onSizePerPageChange:function(page,sizePerPage){
        console.log('page',page);
        console.log('sizePerPage',sizePerPage);
       },
    });

  return (
    <>
    <h1>Bootstrap DataTable</h1>
    {/* {data.length>0?(<BootstrapTable keyField='id' columns={columns} data={data}/>):''} */}
    <BootstrapTable 
    bootstrap4 
    keyField='id' 
    columns={columns} 
    data={data}
    pagination={pagination}
    />
    
    </>
  )
}

export default BootstrapDataTable