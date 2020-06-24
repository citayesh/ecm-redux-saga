import React from "react";
import {toggleCartHidden} from "../../redux/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors"

import {ShoppingIcon,
  CartContainer,
  ItemCountContainer} from "./CartIcon.style";


function CartIcon(){
const dispatch = useDispatch();
const itemCount=useSelector(state =>selectCartItemsCount(state))
  return(
    <CartContainer onClick={() =>dispatch(toggleCartHidden())}>
        <ShoppingIcon/>
  <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
)}


export default CartIcon;