import React from 'react';

import { Button } from './styles';

function ButtonStyled({ width = 293, height = 49, children, onClick, size }) {
  return (
    <Button
      type='submit'
      width={width}
      height={height}
      size={size}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonStyled;