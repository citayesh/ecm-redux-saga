import React from 'react';
import "./CustomButton.style.scss"


const CustomButton=({children, isGoogleSignin, ...otherProps})=>(
<button className={` ${isGoogleSignin ? 'google-signin':''} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton;
