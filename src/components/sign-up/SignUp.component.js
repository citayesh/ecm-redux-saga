import React, { useState} from 'react';
import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import { signUpStart } from '../../redux/user/user.action'
import {SignUpTitle,SignUpContainer} from './SignUp.style';
import { useDispatch } from 'react-redux';

function SignUp(){
const dispatch=useDispatch();  
const [state,setState]=useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''})
  async function handleSubmit(event) {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } =state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setState(prevState => ({ ...prevState, [name]: value }));

  };
    const { displayName, email, password, confirmPassword } =state;
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            lable='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            lable='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            lable='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            lable='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }

export default SignUp;