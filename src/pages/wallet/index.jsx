import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ContainerAndHeaderTemplate from '../../components/mainTemplate/containerAndHeader';
import ButtonStyled from '../../components/atoms/buttonStyled';

import { CartContext } from '../../contexts/cartContext';

import { MdOutlineArrowBackIosNew, MdClose } from "react-icons/md";

import { ContentReturnPage, ContentInfo, Product } from './styles';

function Wallet() {
  const navigate = useNavigate();

  const { productsCart, setProductsCart, handlePostItemsCart, setFormOfPayment } = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    handleSumTotalCart();
  }, []);

  const handleRemoveItemsCart = (idItem) => {
    const removeItem = productsCart.filter((i) => i.id !== idItem);
    setProductsCart(removeItem);
  }

  const handleSumTotalCart = () => {
    let total = 0;

    total = productsCart?.reduce((sum, item) => {
      return sum + Number(item.subtotal);
    }, 0);

    setTotalCart(total);
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
                  <p className='title'>R${i.subtotal.toFixed(2).replace('.', ',')}</p>
                  <button onClick={() => handleRemoveItemsCart(i.id)}>
                    <MdClose />
                  </button>
                </div>
              </Product>
              <div className='divHr' />
            </div>
          ))}

          <div className='divAlign'>
            <p>TOTAL: R$ {totalCart.toFixed(2).replace('.', ',')}</p>
          </div>

          <label id="formPag" >Selecione a forma de pagamento:</label>
          <select name='pag' id="formPag" onChange={(e) => setFormOfPayment(e.target.value)}>
            <option value=''>SELECIONE:</option>
            <option value='pix'>PIX</option>
            <option value='creditCard'>CARTÃO DE CRÉDITO</option>
            <option value='debitCard'>CARTÃO DE DÉBITO</option>
          </select>


          <ButtonStyled
            width='220'
            height='40'
            onClick={handlePostItemsCart}
          >
            FINALIZAR PEDIDO
          </ButtonStyled>

        </ContentInfo>
      </>
    }
    />
  );
}

export default Wallet;