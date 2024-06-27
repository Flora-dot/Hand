import React from 'react';

export const Button = ({ className, children }) => {
    return (
      <button className={` bg-dark-black text-custom-white  rounded-lg py-3  text-base font-semibold ${className}`}>
        {children}
      </button>
    );
  };