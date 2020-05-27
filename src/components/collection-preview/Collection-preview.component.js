import React from 'react';
import "./Collection-preview.style.scss"
import CollectionItemComponent from '../collection-item/CollectionItem.component';

const CollectionPreview=({title,items})=>(
<div className="collection-preview">
<h1 className="title">{title.toUpperCase()}</h1>
<div className="preview">
    {items.filter((item,idx)=>idx< 4)
    .map(item=>
<CollectionItemComponent key={item.id} item={item}/>)}
</div>
</div>   
)


export default CollectionPreview;
