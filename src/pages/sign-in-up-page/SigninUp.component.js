import React from 'react';
import {SignInAndSignUpContainer} from "./SigninUp.style"
import Signin from '../../components/sign-in/Signin.component';
import SignUp from '../../components/sign-up/SignUp.component'

const SigninUp=()=>(
<SignInAndSignUpContainer>
<Signin/>
<SignUp/>
</SignInAndSignUpContainer>
)

export default SigninUp;
