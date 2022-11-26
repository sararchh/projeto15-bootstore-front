import React, { useEffect } from 'react';
import { MdCheckCircleOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import ButtonStyled from '../../components/atoms/buttonStyled';
import ContainerAndHeaderTemplate from '../../components/mainTemplate/containerAndHeader';

import { Content } from './styles';

function CompletedOrder() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ContainerAndHeaderTemplate content={
      <Content>
        <p className='title'>Pedido concluido com sucesso!</p>
        <MdCheckCircleOutline />

        <div className='divStyled'>
          <p>Muito obrigado pela sua compra, em breve estara disponível para acompanhamento (sujeito a aprovação de cartão), seu pedido poderá ser acompanhado por e-mail ou no menu “conta”.</p>
        </div>

        <ButtonStyled
          width='220'
          height='40'
          onClick={() => { navigate('/store') }}
        >
          HOME
        </ButtonStyled>
      </Content>
    }
    />
  );
}

export default CompletedOrder;