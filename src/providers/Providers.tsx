import React from 'react';
import { IChildrenProps } from '../types/components.types';
import MuiThemeProvider from './MuiThemeProvider';
const Providers = ({ children }: IChildrenProps) => {
  return (
    <MuiThemeProvider>
      { children }
    </MuiThemeProvider>
  );
};

export default Providers;
