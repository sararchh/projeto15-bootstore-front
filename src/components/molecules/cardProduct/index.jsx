import React, { useContext } from 'react';
import { CartContext } from '../../../contexts/cartContext';

import ButtonStyled from '../../atoms/buttonStyled';

import { Container, DivStyled, Text, ContentInfo } from './styles';

function CardProduct({ id, category, description, image, name, price }) {

  const { handleAddItemCart } = useContext(CartContext);

  const handleAddItem = () => {
    const obj = { id, category, description, image, name, price }

    handleAddItemCart(obj);
  }

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
          <ButtonStyled
            width='68'
            height='16'
            size='12px'
            onClick={handleAddItem}
          >
            COMPRAR
          </ButtonStyled>
        </div>
      </ContentInfo>

    </Container>
  );
}

export default CardProduct;