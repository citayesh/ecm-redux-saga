import React from 'react';
import "./SigninUp.style.scss"
import Signin from '../../components/sign-in/Signin.component';
import SignUp from '../../components/sign-up/SignUp.component'

const SigninUp=()=>(
<div className="sign-in-up">
<Signin/>
<SignUp/>
</div>
)

export default SigninUp;
