import React, { FunctionComponent } from 'react';
interface ButtonProps {
  label?: string;
  className: any;
  onClick: () => void;
}
const Button: FunctionComponent<ButtonProps> = ({ label, onClick = () => {}, className = '', ...rest }) => {
  return (
    <button
      className={`rounded-md bg-blue-400 p-2 font-medium ${className}`}
      onClick={onClick}
      {...rest}
    >
        {label}
    </button>
  )
};
export default Button;