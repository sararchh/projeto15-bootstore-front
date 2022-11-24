import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos

import InputStyled from '../../components/atoms/inputStyled';
import ButtonStyled from '../../components/atoms/buttonStyled';
import { UserContext } from '../../contexts/userContext';

import { Container, Content, CardLogo, Form, TextButton } from './styles';

function SignUp() {

  const { handleSignUp } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Digite e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Senha obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleGetValuesSignIn = () => {
    if (Object.keys(errors).length > 0) return;
    const values = getValues();

    handleSignUp(values);
  }

  return (
    <Container>
      <Content>
        <CardLogo>
          <img src='/assets/logo.svg' alt='Logo Boot Store' />
          <h1>BOOT STORE</h1>
        </CardLogo>

        <Form onSubmit={handleSubmit(handleGetValuesSignIn)}>
          <InputStyled
            name='name'
            placeholder='Seu nome completo'
            onChange={value => setValue('name', value)}
            messageError={errors?.name?.message}
          />

          <InputStyled
            name='email'
            placeholder='Seu e-mail'
            onChange={value => setValue('email', value)}
            messageError={errors?.email?.message}
          />

          <InputStyled
            name='password'
            type='password'
            placeholder='Sua senha secreta'
            onChange={value => setValue('password', value)}
            messageError={errors?.password?.message}
          />

          <ButtonStyled
            children='CADASTRAR'
          />
        </Form>

        <Link to='/'>
          <TextButton> Já possui conta? Acesse</TextButton>
        </Link>

      </Content>
    </Container>
  );
}

export default SignUp;