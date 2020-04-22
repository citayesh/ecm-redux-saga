import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { auth } from "../firebase/Firebase.utils";


import "./Header.style.scss"

function Header({currentUser}){
   
async function signOutUser(){
        try {
            await auth.signOut();
        } catch (e) {
            console.log(e);
        }
    }
return(
<div className="header">
    <Link className="logo-container" to="/">
<Logo/>
    </Link>
    <div className="options">
        <Link className="option" to="/shop">
        SHOP
        </Link>
        <Link className="option" to="/contact">
        CONTACT
        </Link>
         {
             currentUser ?
             <div className="option" onClick={signOutUser}>SIGN OUT</div>
             :
             <Link className="option" to="/signin">SIGN IN</Link>
            
         }
    
    </div>

</div>


)
        }
export default Header;