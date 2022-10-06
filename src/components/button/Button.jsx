import React from 'react';

const Button = ({ classes, label, handler = () => { console.log('reassign me when use'); } }) => {

  return (
    <button className={classes} onClick={handler}> {label}</button >
  );
};

export { Button };