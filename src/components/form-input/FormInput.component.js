import React from 'react';
import "./FormInput.style.scss"


const FormInput=({handleChange,lable,...otherProps})=>(
<div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps}/>
    {lable?
        (<label className={`${otherProps.value.length ?'shrink':''} form-input-label`}>
            {lable}
        </label>
        ):null
    }
</div>
)

export default FormInput;
