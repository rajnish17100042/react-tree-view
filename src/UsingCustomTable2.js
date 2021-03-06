import React from 'react'
import CustomDataTable from './CustomDataTable';

const data=[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
    },
    {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
    },
    {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
    },
    {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
    },
    {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
    },
    {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
    },
    {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
    },
    {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
    },];

    // const cols=['userId','id','title','completed'];
    const cols1=[
      {
      attr:'userId',
      type:'number',  //by default string
      sort:true,//by default false 
      },
      {
        attr:'id',
        type:'number', 
        // sort:false,   //by default feature is taken care
      },
      {
        attr:'title',
        // type:'string', //by default feature is taken care
        sort:true,
      },
      {
        attr:'completed',
        // type:'string', 
        sort:true,
      },
    ]
    const icon="fa fa-eye";
    // const searchAttr="title";
const UsingCustomTable2 = () => {
  return (
    <>
    <h1>Custom DataTable</h1>
    <div className="custom-data-table">
    <CustomDataTable data={data} cols={cols1} icon={icon} searchAttr={cols1}/>
    </div>
    </>
  )
}

export default UsingCustomTable2