import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { FaUserPlus } from 'react-icons/fa';
import { TiArrowRightThick } from 'react-icons/ti';
import { FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErros from '../../utils/getValidationErros';

import logo from '../../assets/logo.png';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

import { Container, Header, Content, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro na autenticação',
            description:
              'Ocorreu um erro ao fazer login, cheque as credenciais.',
          });
        }
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Header>
        <div>
          <img src={logo} alt="GoBarber" />

          <Link to="/signup">
            Criar conta
            <FaUserPlus />
          </Link>
        </div>
      </Header>
      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Faça seu Login</h2>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">
              Entrar
              <TiArrowRightThick />
            </Button>

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignIn;
