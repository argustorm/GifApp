import React, { useState } from 'react';

const InputComponent = ({ setCategory }) => {

    const [text, setText] = useState('');
    
    // Handle Submit
    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (text.trim().length > 2) {
            setCategory(text);
            setText('');
        }
    }

    // Handle Input
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form onSubmit = { handleOnSubmit }>
            <input 
                type = 'text'
                placeholder = 'Escriba una categoria'
                onChange = { handleOnChange }
                value = { text }
            />
        </form>
    )
}

export default InputComponent;