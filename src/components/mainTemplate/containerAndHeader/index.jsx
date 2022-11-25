import React, { useContext, useEffect, useState } from 'react';

import { MdAccountCircle, MdShoppingBag } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';
import { Container, Content, Header, TextTitle } from './styles';

function ContainerAndHeaderTemplate({ content }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState();

  const { handleLogoutAccount } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUsername(user);

  }, []);


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

            <button onClick={handleLogoutAccount} >
              <p>{username} | Sair</p>
            </button>
          </span>

          <span className='divStyled'>
            <button className='divStyled' onClick={() => { navigate('/wallet') }}>
              <MdShoppingBag className='svgStyled' />
              <p>Sacola</p>
            </button>
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