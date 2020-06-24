import React from 'react';
import { useDispatch } from 'react-redux';
import {addItem} from "../../redux/cart/cart.action"

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from "./CollectionItem.style"

const CollectionItem=({item})=>{
 const {name,imageUrl,price}=item;
 const dispatch=useDispatch();
 
    return(
            <CollectionItemContainer>
                <BackgroundImage imageUrl={imageUrl}/>
                <CollectionFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>{price}</PriceContainer>
                </CollectionFooterContainer> 
                <AddButton onClick={()=>dispatch(addItem(item))} inverted>add to cart </AddButton>  
            </CollectionItemContainer>
)}


export default CollectionItem;
