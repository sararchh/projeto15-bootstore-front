import React from 'react';

import ButtonStyled from '../../atoms/buttonStyled';

import { Container, DivStyled, Text, ContentInfo } from './styles';

function CardProduct({ id, category, description, image, name, price }) {
  return (
    <Container>
      <img src={image} alt="Imagem dos tênis" />
      <DivStyled>
      </DivStyled>

      <ContentInfo>
        <Text>{name}</Text>
        <p className='textInfo'>{description}</p>

        <div className='divStyled'>
          <Text> R${price.toFixed(2)}</Text>
          <ButtonStyled width='68' height='16' size='12px'>COMPRAR</ButtonStyled>
        </div>
      </ContentInfo>

    </Container>
  );
}

export default CardProduct;