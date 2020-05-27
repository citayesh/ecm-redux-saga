import React from 'react';
import "./CustomButton.style.scss"


const CustomButton=({children, isGoogleSignin,inverted, ...otherProps})=>(
<button className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignin ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}>
    {children}</button>
)

export default CustomButton;
