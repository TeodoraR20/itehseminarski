import Header from './Header';
import React, {useState, useEffect} from 'react'
//import './App.css';

import {Table} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

function ProductList()
{

const [data,setData] = useState([]);
useEffect( async ()=>{

getData();

},[])

async function deleteOperation(id)
{

let result = await fetch("http://localhost:8000/api/delete/"+id,{

method:'DELETE'

});

 result = await result.json();
 console.warn(result)
getData();

}

async function getData()
{
    let result = await fetch ("http://localhost:8000/api/list");
 result = await result.json();

setData(result);

}
console.warn("result",data);

return (

<div>

<Header />


<h1>Product List</h1>

<div className="col-sm-8 offset-sm-2">

<Table>

<tr>

<td>Id</td>
<td>Name</td>
<td>Price</td>
<td>Description</td>
<td>Image </td>
<td>Operations</td>

</tr>


{

data.map((item)=>

    <tr>

<td>{item.id}</td>
<td>{item.name}</td>
<td>{item.price}</td>
<td>{item.description}</td>
<td> <img  style={{width:200}}src={"http://localhost:8000/"+item.file_path} /> </td>
<td> <Button onClick={()=>deleteOperation(item.id)}>Delete</Button></td>
</tr>


)

}

</Table>

</div>

</div>

)


}

export default ProductList;