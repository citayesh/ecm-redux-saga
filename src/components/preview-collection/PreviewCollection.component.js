import React from 'react';
import "./PreviewCollection.style.scss"
import CollectionItemComponent from '../collection-item/CollectionItem.component';

const PreviewCollection=({title,items})=>(
<div className="collection-preview">
<h1 className="title">{title.toUpperCase()}</h1>
<div className="preview">
    {items.filter((item,idx)=>idx< 4)
    .map(({id, ...otherItemProps})=>
<CollectionItemComponent key={id} {...otherItemProps}/>)}
</div>
</div>   
)


export default PreviewCollection;
