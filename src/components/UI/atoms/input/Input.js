import React from 'react';

const Input = ({ type, name, placeHolder, ...props }) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeHolder} {...props} />
    </>
  );
};

export default Input;
