import React from 'react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white shadow-md p-5 rounded-lg ${className}`}>
    {children}
  </div>
);

export default Card;
