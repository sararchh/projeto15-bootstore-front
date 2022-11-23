import React from 'react';

import { Container } from './styles';

function ContainerAndHeaderTemplate({ content }) {
  return (
    <>
      <Container>
        {content}
      </Container>
    </>
  )
}

export default ContainerAndHeaderTemplate;