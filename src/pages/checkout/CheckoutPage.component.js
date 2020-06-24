import React from "react";
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors"
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import StripeCheckoutButton from '../../components/stripeButton/stripeButton.component'
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.style';

const CheckoutPage =()=>{
    const total =useSelector(state =>selectCartTotal(state));
    const cartItems=useSelector(state=>selectCartItems(state))
    return(
        <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
      </CheckoutPageContainer>
    );
    
}

export default CheckoutPage;