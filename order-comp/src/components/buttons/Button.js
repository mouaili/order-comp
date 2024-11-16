import React from 'react';

const styleBtn = {
  background: '#114E56',
  width: '124px',
  cursor: 'pointer',
  borderRadius: '2px',
  color: '#F1F1F1',
  padding: '5px 10px',
  border: 'none',
};
const Button = ({ children, clickFight, disabled, danger }) => {
  return (
    <button
      className={`${danger} m-3`}
      style={styleBtn}
      onClick={clickFight}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
