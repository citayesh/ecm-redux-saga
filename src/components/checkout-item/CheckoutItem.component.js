import React from 'react';
import './CheckoutItem.style.scss';
import { useDispatch } from 'react-redux';
import {clearItemFromCart,addItem,removeItem} from "../../redux/cart/cart.action" 

const CheckoutItem = ({ item}) => {
  const  { name, imageUrl, price, quantity } =item;
  const dispatch =useDispatch();
  return(
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>
        <div className='arrow' onClick={()=>dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
    <span className='price'>{price}</span>
    <div className='remove-button' 
    onClick={()=>dispatch(clearItemFromCart(item))}>&#10005;</div>
  </div>
);
}
export default CheckoutItem;