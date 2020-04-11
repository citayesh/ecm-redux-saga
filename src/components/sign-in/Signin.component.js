import React, { useState } from 'react';
import "./Signin.style.scss"
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';



function Signin(){
    const [state, setState] = useState({ email: "", password: "" });
    function handleChange(event){
        const {name,value}=event.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    function handleSubmit(event){
        event.preventDefault();
        const {email,password}=state;
    }
    return(
<div className="sign-in">
    <h2>I allready have an account</h2>
    <span>Sign in with your email and password</span>
    <form onSubmit={handleSubmit}>
    <FormInput 
    name="email"
     value={state.email} 
     type="email"
     lable="Email"
     handleChange={handleChange}
     required />
    <FormInput 
    name="password" 
    value={state.password} 
    type="password" 
    lable="Password"
    handleChange={handleChange} 
    required />
    <CustomButton type="submit">Sign in</CustomButton>
    </form>
</div>
)
}

export default Signin;
