import React, { useCallback, useMemo, useState } from 'react';
import { Container, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useForm, useWatch } from 'react-hook-form';
import ControlledInput from 'components/controlledInput/ControlledInput';
import styles from './Login.module.scss';
import Button from '../../components/button/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { ILoginInputs } from '../types/auth.types';
import authService from '../services/auth.service';
import useAuthStore from '../store/auth.store';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required()
});

const Login = () => {
  const { control, handleSubmit, reset } = useForm<ILoginInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const setUser = useAuthStore(state => state.setUser );
  const [ loading, setLoading ] = useState(false);
  const values = useWatch({ control });
  const navigate = useNavigate();

  const onSubmit = useCallback((data) => {
    setLoading(true);
    authService.login(data).then((res) => {
      setUser(res);
    }).finally(() => {
      setLoading(false);
      navigate('/');
    });
  }, []);

  const submitDisabled = useMemo(() => {
    return !values?.email.length || !values?.password.length;
  }, [ values ]);

  return (
    <Container className={ styles.container } maxWidth='sm'>
      <Container className={ styles.login }>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <Typography color='#259732' variant='h4'>
            <HomeWorkIcon fontSize='large' /> Home Manager
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
            <LoadingButton
              variant='contained'
              loading={ loading }
              type='submit'
              disabled={ submitDisabled }
            >
              Confirm
            </LoadingButton>
          </Container>
        </form>
      </Container>
    </Container>
  );
};

export default Login;