import React, { useCallback } from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlledInput from 'components/controlledInput/ControlledInput';
import styles from './Login.module.scss';
import Button from '../../components/button/Button';

interface TLoginInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit, reset } = useForm<TLoginInputs>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Container className={ styles.container } maxWidth='sm'>
      <Container className={ styles.login }>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <Typography color='#259732' variant='h4'>
            Home Manager
          </Typography>
          <ControlledInput
            label='E-mail'
            name='email'
            className={ styles.input }
            control={ control }
          />
          <ControlledInput
            label='Password'
            name='password'
            type='password'
            className={ styles.input }
            control={ control }
          />
          <Container className={ styles.buttons }>
            <Button onClick={ () => reset() }>Reset</Button>
            <Button variant='contained' type='submit'>Confirm</Button>
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default Login;