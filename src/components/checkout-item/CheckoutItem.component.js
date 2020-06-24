import React from 'react';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from'./CheckoutItem.style';
import { useDispatch } from 'react-redux';
import {clearItemFromCart,addItem,removeItem} from "../../redux/cart/cart.action" 

const CheckoutItem = ({ item}) => {
  const  { name, imageUrl, price, quantity } =item;
  const dispatch =useDispatch();
  return(
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
        <div className='arrow' onClick={()=>dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>dispatch(addItem(item))}>
          &#10095;
        </div>
      </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer
    onClick={()=>dispatch(clearItemFromCart(item))}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
);
}
export default CheckoutItem;