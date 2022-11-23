import React from 'react';

import { Button } from './styles';

function ButtonStyled({ width = 293, height = 49, children, onClick }) {
  return (
    <Button
      type='submit'
      width={width}
      height={height}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ButtonStyled;