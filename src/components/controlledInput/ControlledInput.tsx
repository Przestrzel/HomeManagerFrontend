import React from 'react';
import { type TextFieldProps, TextField } from '@mui/material';
import { type Control, Controller } from 'react-hook-form';

type Props = {
  control: Control;
  name: string;
} & TextFieldProps;

const ControlledInput = ({ control, name, ...props }: Props) => {
  return (
    <Controller
      control={ control }
      name={ name }
      render={ ({ field }) => (
        <TextField
          { ...field }
          { ...props }
        />
      ) }
    />
  );
};

export default ControlledInput;