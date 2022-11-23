import React from 'react';

import { MdAccountCircle, MdShoppingBag } from "react-icons/md";
import { Container, Content, Header, TextTitle } from './styles';

function ContainerAndHeaderTemplate({ content }) {
  return (
    <Container>
      <Header>
        <div className='divStyled'>
          <img src="/assets/logo.svg" alt="Logo" />
          <TextTitle>BOOT STORE</TextTitle>
        </div>

        <div className='divStyled'>
          <span className='divStyled'>
            <MdAccountCircle className='svgStyled'/>
            <p>Fulano | Sair</p>
          </span>

          <span className='divStyled'>
            <MdShoppingBag className='svgStyled'/>
            <p>Sacola</p>
          </span>
        </div>
      </Header>

      <Content>
        {content}
      </Content>
    </Container>
  )
}

export default ContainerAndHeaderTemplate;