import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ContainerAndHeaderTemplate from '../../components/mainTemplate/containerAndHeader';
import ButtonStyled from '../../components/atoms/buttonStyled';

import { CartContext } from '../../contexts/cartContext';

import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";

import { ContentReturnPage, ContentInfo, Product } from './styles';

function Wallet() {
  const navigate = useNavigate();

  const { productsCart, setProductsCart } = useContext(CartContext);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, []);

  const handleRemoveItemsCart = (idItem) => {
    const removeItem = productsCart.filter((i) => i.id !== idItem);
    setProductsCart(removeItem);
  }
  return (
    <ContainerAndHeaderTemplate content={
      <>
        <button
          onClick={() => navigate(-1)}
        >
          <ContentReturnPage>
            <MdOutlineArrowBackIosNew />
            <p>Minha Sacola</p>
          </ContentReturnPage>
        </button>

        <ContentInfo>
          {Boolean(productsCart.length) && productsCart.map((i) => (
            <div key={i.id}>
              <Product >
                <div className='divStyled'>
                  <img src={i.image} alt="Imagem do produto" />
                  <div>
                    <p className='title'>{i.name}</p>
                    <p>quant: {i.qtd}</p>
                    <p>R${i.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className='divStyled'>
                  <p className='title'>R${i.subtotal.toFixed(2)}</p>
                  <button onClick={() => handleRemoveItemsCart(i.id)}>
                    <MdClose />
                  </button>
                </div>
              </Product>
              <div className='divHr' />
            </div>
          ))}

          <div className='divAlign'>
            <p>TOTAL: R$ 699,98</p>
          </div>

          <ButtonStyled
            width='220'
            height='40'
          >FINALIZAR PEDIDO
          </ButtonStyled>

        </ContentInfo>
      </>
    }
    />
  );
}

export default Wallet;