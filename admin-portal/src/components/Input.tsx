import React from 'react'

interface InputProps {
    name: string;
    value: string;
    placeholder?: string;
    label?: string;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder,  value, onChangeHandler }) => {
    return (
        <>
            <label htmlFor="last_name" className="text-sm font-medium text-gray-900">{label}</label>
            <input
                type="text"
                name={name}
                id={`${name}_id`}
                className="
                    bg-gray-50 
                    border 
                    border-gray-300 
                    text-gray-900 
                    text-sm 
                    rounded-sm 
                    focus:ring-blue-500 
                    focus:border-blue-500 
                    block 
                    p-2 
                    dark:border-gray-600 
                    dark:placeholder-gray-400 
                    dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"
                placeholder={placeholder || ''}
                onChange={onChangeHandler}
                value={value}
                required
            />
        </>

    )
}
// <input name={name} value={value} onChange={onChangeHandler}/>
export default Input