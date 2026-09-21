import React from 'react';

export default function Button({ text, onClick, className = '' }) {
  return (
    <button className={`common_btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}
