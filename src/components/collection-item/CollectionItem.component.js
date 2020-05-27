import React from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../custom-button/CustomButton.component';
import {addItem} from "../../redux/cart/cart.action"

import "./CollectionItem.style.scss"

const CollectionItem=({item})=>{
 const {name,imageUrl,price}=item;
 const dispatch=useDispatch();
 
    return(
            <div className="collection-item">
                <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div> 
                <CustomButton onClick={()=>dispatch(addItem(item))} inverted>add to cart </CustomButton>  
            </div>
)}


export default CollectionItem;
