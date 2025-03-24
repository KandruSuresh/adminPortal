import React from 'react'

interface RadioProps {
    id: string;
    name: string;
    value: string;
    defaultChecked?: boolean;
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio: React.FC<RadioProps> = ({ defaultChecked, id, name, value, onChangeHandler }) => {
    return (
        <input
            type="radio"
            defaultChecked={defaultChecked}
            id={id}
            value={value}
            name={name}
            onChange={onChangeHandler}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
    )
}

export default Radio