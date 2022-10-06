import React from 'react';

const SearchPanel = ({ className, placeholder, handler = () => console.log('reassign me when use'), value = '' }) => {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        onChange={handler}
        value={value} />
    </>
  );
};

export { SearchPanel };