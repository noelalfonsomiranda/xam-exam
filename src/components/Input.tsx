import React, { FunctionComponent } from 'react';
interface InputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  name: string;
  placeholder: string;
  type: string;
  className: any;
}
const Input: FunctionComponent<InputProps> = ({
  onChange,
  value,
  name,
  placeholder,
  type,
  className = '',
  ...rest
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`border-2 border-solid border-black w-full p-1 ${className}`}
      {...rest}
    />
  )
};
export default Input;