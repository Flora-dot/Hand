import React from 'react';

export const Button = ({ className, children }) => {
    return (
      <button className={` bg-black text-custom-light-white h-12 rounded-lg  ${className}`}>
        {children}
      </button>
    );
  };