import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import ContainerAndHeaderTemplate from '../../components/mainTemplate/containerAndHeader';
import InputStyled from '../../components/atoms/inputStyled';
import CardProduct from '../../components/molecules/cardProduct';

import { MdOutlineSearch, MdFilterListAlt } from "react-icons/md";

import { SearchSection, ContentSearch, ContentCard } from './styles';
import { useNavigate } from 'react-router-dom';

function Store() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [findProduct, setFindProduct] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/');
    }

    handleGetProducts();
  }, []);

  const handleGetProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data.data);
    } catch (error) {
      toast.error('Erro ao buscar produtos')
    }
  }

  const handleFindProduct = async () => {
    const existProduct = products.filter((i) => i.name.toLowerCase().includes(findProduct.toLowerCase()));
    if (existProduct) {
      setProducts(existProduct);
    }

    if (findProduct.length === 0) {
      handleGetProducts();
    }
  }

  return (
    <ContainerAndHeaderTemplate content={
      <>
        <SearchSection>
          <ContentSearch>
            <span className='inputPosition'>
              <InputStyled
                className='inputPosition'
                placeholder='Faca uma busca'
                value={findProduct}
                onChange={value => setFindProduct(value)}
                width='398'
                height='49'
              />

              <button
                onClick={handleFindProduct}
              >
                <MdOutlineSearch />
              </button>
            </span>
          </ContentSearch>

          {/* <button className='buttonStyled'>
            <p>Filtrar</p>
            <MdFilterListAlt />
          </button> */}
        </SearchSection>

        <ContentCard>
          {Boolean(products.length) && products.map((i) => (
            <CardProduct
              key={i._id}
              id={i._id}
              category={i.category}
              description={i.description}
              image={i.image}
              name={i.name}
              price={i.price}
            />
          ))}
        </ContentCard>
      </>
    }
    />
  )
}

export default Store;