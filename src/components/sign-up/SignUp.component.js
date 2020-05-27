import React, { useState} from 'react';

import CustomButton from '../custom-button/CustomButton.component';
import FormInput from '../form-input/FormInput.component';
import { auth, createUserProfileDocument } from '../firebase/Firebase.utils';

import './SignUp.style.scss';

function SignUp(){
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

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
       setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setState(prevState => ({ ...prevState, [name]: value }));

  };
    const { displayName, email, password, confirmPassword } =state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
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
      </div>
    );
  }

export default SignUp;