import React, { FunctionComponent } from 'react';
interface ErrorAlertProps {
  text?: string;
  className: any;
}
const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({ text = 'Incorrect credentials.', className }) => {
  return (
    <p className={`mt-3 text-red-600 bg-red-300 p-1 py-3 font-medium ${className}`}>Error: {text}</p>
  )
};
export default ErrorAlert;