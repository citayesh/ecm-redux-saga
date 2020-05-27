import React from "react";
import "./CartDropdown.style.scss";
import CustomButton from "../custom-button/CustomButton.component";
import { useSelector, useDispatch } from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors"
import CartItem from "../cart-item/CartItem.componenet";
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.action"

function CartDropdown({history}){
const cartItems=useSelector(state=>selectCartItems(state));
const dispatch =useDispatch();
    return(
    <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                cartItems.length ?
               (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>))
                :
            (
                <span className="empty-massege">Your cart is empty</span>
            )

                }
            </div>
            <CustomButton onClick={()=>{history.push('/checkout')
        dispatch(toggleCartHidden())
        }}>GO TO CHECKOUT</CustomButton>   
    </div>
    )}
export default withRouter(CartDropdown);