import React from "react";
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from "./CartDropdown.style";
import { useSelector, useDispatch } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors"
import CartItem from "../cart-item/CartItem.componenet";
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.action"

function CartDropdown({history}){
const cartItems=useSelector(state=>selectCartItems(state));
const dispatch =useDispatch();
    return(
    <CartDropdownContainer>
            <CartItemsContainer>
                {
                cartItems.length ?
               (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>))
                :
            (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )

                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=>{history.push('/checkout')
        dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CartDropdownButton>   
    </CartDropdownContainer>
    )}
export default withRouter(CartDropdown);