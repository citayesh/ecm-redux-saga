import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/ShoppingIcon.svg";
import {toggleCartHidden} from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

import "./CartIcon.style.scss";


function CartIcon(){
const dispatch = useDispatch();
const itemCount=useSelector(state =>selectCartItemsCount(state))
  return(
    <div className='cart-icon' onClick={() =>dispatch(toggleCartHidden())}>
        <ShoppingIcon className='shopping-icon'/>
  <span className='item-count'>{itemCount}</span>
    </div>
)}


export default CartIcon;