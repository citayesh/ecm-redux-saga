import React from 'react';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from  "./FormInput.style"


const FormInput=({handleChange,lable,...props})=>(
<GroupContainer>
    <FormInputContainer onChange={handleChange} {...props}/>
    {lable?
        (<FormInputLabel className={props.value.length ? 'shrink' : ''} >
            {lable}
        </FormInputLabel>
        ):null
    }
</GroupContainer>
)

export default FormInput;
