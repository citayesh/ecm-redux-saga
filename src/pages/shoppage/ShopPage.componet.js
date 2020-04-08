import React,{useState,useEffect} from "react";
import "./ShopPage.style.scss"
import PreviewCollectionComponent from "../../components/preview-collection/PreviewCollection.component";


function ShopPage(){
const [collection,setCollection]=useState([])
useEffect(()=>{
    fetch('https://my-json-server.typicode.com/citayesh/product-api/db')
    .then(response => {
        return(response.json());
      }).then((json) => setCollection(json.SHOP_DATA))
       
},[])
return(
<div className="shop-page">
   { collection.map(({id,...otherCollectionProps})=>
    <PreviewCollectionComponent key={id} {...otherCollectionProps}/>)
   }
</div>

)
}
export default ShopPage;
