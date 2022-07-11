import React, { useCallback, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Container, Navigation, StoreLogo } from './styles';

import Input from '../Input';
import Button from '../Button';
import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface SignInFormData {
  email: string;
  password: string;
}

const MenuForm: React.FC = () => {
  const [formActive, setFormActive] = useState('sign-in');

  const sighUpFormRef = useRef<FormHandles>(null);
  const sighInFormRef = useRef<FormHandles>(null);

  const { signIn, signUp } = useAuth();
  const history = useHistory();

  const classNameSignIn = formActive === 'sign-in' ? 'hidden' : '';
  const classNameSignUp = formActive === 'sign-up' ? 'hidden' : '';

  const handleToggle = useCallback(() => {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }, []);

  const handleSwichForm = useCallback(() => {
    setFormActive(formActive === 'sign-in' ? 'sign-up' : 'sign-in');
  }, [formActive, setFormActive]);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        sighUpFormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Name is required'),
          email: Yup.string()
            .required('Email is required')
            .email('Please, put a valid email'),
          password: Yup.string().min(6, 'Minimun 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signUp({
          name: data.name,
          email: data.email,
          password: data.password,
        });

        history.push('/user-info');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          sighUpFormRef.current?.setErrors(errors);
        }
      }
    },
    [signUp, history],
  );

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        sighInFormRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email is required')
            .email('Please, put a valid email'),
          password: Yup.string().min(6, 'Minimun 6 digits'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          sighInFormRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Navigation>
        <h1>
          <StoreLogo />
          <span>Store</span>
        </h1>
        <button type="button" className="action--close" onClick={handleToggle}>
          <IoClose />
        </button>
      </Navigation>
      <Form
        ref={sighUpFormRef}
        onSubmit={handleSignUp}
        id="sign-up"
        className={classNameSignUp}
      >
        <span className="title">Cadastre</span>
        <span className="subtitle">
          ou se já tem cadastro,{' '}
          <a href="/#" onClick={handleSwichForm}>
            acesse
          </a>
        </span>
        <Input type="text" name="name" icon={FiUser} placeholder="Name" />
        <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Password"
        />
        <div className="terms">
          <input type="checkbox" />
          <span>
            Concordo com os <a href="/terms">Termos do Store</a>
          </span>
        </div>
        <Button type="submit">Enviar</Button>
      </Form>
      <Form
        ref={sighInFormRef}
        onSubmit={handleSignIn}
        id="sign-in"
        className={classNameSignIn}
        initialData={{
          email: 'alexandreoliveira@aleoliv.dev',
          password: '123456',
        }}
      >
        <span className="title">Entre</span>
        <span className="subtitle">
          ou se ainda não tem cadastro,{' '}
          <a href="/#" onClick={handleSwichForm}>
            cadastre agora
          </a>
        </span>
        <Input type="email" name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          type="password"
          name="password"
          icon={FiLock}
          placeholder="Password"
        />
        <div className="restorePassword">
          <a href="/restore-password">Recuperar minha</a>
        </div>
        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default MenuForm;
