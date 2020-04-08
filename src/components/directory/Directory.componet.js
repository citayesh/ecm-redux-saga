import React,{useState,useEffect} from "react";
import MenuItem from "../menu-item/MenuItem.component"
import "./Directory.style.scss"


function Directory(){
const [data,setData]=useState([])
useEffect(()=>{
    fetch('https://my-json-server.typicode.com/citayesh/menu-api/db')
    .then(response => {
        return(response.json());
      }).then((json) => setData(json.menu))
       
},[])
return(
<div className="directory-menu">
   { data.map(({id,...otherDataProps})=>
    <MenuItem key={id} {...otherDataProps}/>)
   }
</div>

)
}
export default Directory;
