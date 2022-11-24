import React, { useContext } from 'react';

import { MdAccountCircle, MdShoppingBag } from "react-icons/md";
import { UserContext } from '../../../contexts/userContext';
import { Container, Content, Header, TextTitle } from './styles';

function ContainerAndHeaderTemplate({ content }) {
  const { userCreated } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <div className='divStyled'>
          <img src="/assets/logo.svg" alt="Logo" />
          <TextTitle>BOOT STORE</TextTitle>
        </div>

        <div className='divStyled'>
          <span className='divStyled'>
            <MdAccountCircle className='svgStyled' />
            <p>{userCreated?.data?.name} | Sair</p>
          </span>

          <span className='divStyled'>
            <MdShoppingBag className='svgStyled' />
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