import React from 'react';
import { Container, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import ControlledInput from 'components/controlledInput/ControlledInput';

const Login = () => {
  const { control } = useForm();

  return (
    <Container maxWidth='sm'>
      <Typography color='#259732' variant='h4'>
        Home Manager
      </Typography>
      <ControlledInput label='Login' name='login' control={ control } />
    </Container>
  );
};

export default Login;