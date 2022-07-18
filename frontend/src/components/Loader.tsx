import React from 'react';
import { Spinner } from 'react-bootstrap';
// @ts-ignore
const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='sattus'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading</span>
    </Spinner>
  );
};

export default Loader;
