import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { FaUserPlus } from 'react-icons/fa';
import { TiArrowLeftThick } from 'react-icons/ti';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import getValidationErros from '../../utils/getValidationErros';

import Logo from '../../Components/Logo';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErros(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <Logo size="large" />

          <Form ref={formRef} initialData={{}} onSubmit={handleSubmit}>
            <h2>Faça seu cadastro</h2>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">
              Cadastrar
              <FaUserPlus />
            </Button>
          </Form>

          <Link to="/">
            <TiArrowLeftThick />
            Já tem uma conta? Faça seu login.
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
