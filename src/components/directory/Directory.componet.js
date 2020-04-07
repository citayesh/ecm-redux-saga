import React,{useState,useEffect} from "react";
import MenuItem from "../menu-item/MenuItem.component"
import "./Directory.style.scss"


function Directory(){
const [data,setData]=useState([])
useEffect(()=>{
    fetch('http://www.mocky.io/v2/5e8bb5532f00002b0088c4cb')
    .then(response => {
        return(response.json());
      }).then((json) => setData(json.menu))
       
},[])
return(
<div className="directory-menu">
   { data.map(({title,imageUrl,id,size})=>
    <MenuItem title={title} imageUrl={imageUrl} key={id} size={size}/>)
   }
</div>

)
}
export default Directory;
