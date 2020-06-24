import React,{useState,useEffect} from "react";
import MenuItem from "../menu-item/MenuItem.component"
import {DirectoryMenuContainer} from "./Directory.style"
import axios from 'axios';


function Directory(){
const [data,setData]=useState([])
useEffect(()=>{
  axios.get(`https://my-json-server.typicode.com/citayesh/menu-api/db`)
    .then(res => {
       setData(res.data.menu)})
       
},[])
return(
<DirectoryMenuContainer>
   { data.map(({id,...otherDataProps})=>
    <MenuItem key={id} {...otherDataProps}/>)
   }
</DirectoryMenuContainer>

)
}
export default Directory;
