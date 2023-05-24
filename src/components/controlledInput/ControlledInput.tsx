import React from 'react';
import { type TextFieldProps, TextField } from '@mui/material';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

type Props<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

const ControlledInput = <T extends FieldValues>({ control, name, ...props }: Props<T>) => {
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