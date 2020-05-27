import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../firebase/Firebase.utils";
import {useSelector } from 'react-redux';
import {selectCartHidden} from "../../redux/cart/cart.selectors"
import {selecetCurrentUser} from "../../redux/user/user.selector"
import "./Header.style.scss"
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

function Header(){
   const currentUser=useSelector(state=>selecetCurrentUser(state))
   const hidden=useSelector(state=>selectCartHidden(state)) 
   return (
   <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
   )
};

export default Header;
