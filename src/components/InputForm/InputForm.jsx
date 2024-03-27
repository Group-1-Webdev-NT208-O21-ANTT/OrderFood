import React from 'react'
import { WrapperInputStyle} from './style'

const InputForm = (props) => {
    const{ placeholder = 'Nhập text', ...rests} = props
    const handleOnchangeInput = (e) => {
        props.handleOnChange(e.target.value)
        }
        
    return(
        <WrapperInputStyle placeholder={placeholder} valueInput={props.value} {...rests} onChange={handleOnchangeInput} />
    )
};

export default InputForm