import React from 'react';
import './Button.scss';

interface IButtonProps {
    title: string;
    disabled: boolean;
}

const Button: React.FC<IButtonProps> = ({title, disabled}) => {
    return (
        <button className='button' disabled={disabled}>
            <div>{title}</div>
        </button>
    )
}

export default Button;