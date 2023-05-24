import React from 'react';
import { IChildrenProps } from '../types/components.types';
import MuiThemeProvider from './MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
const Providers = ({ children }: IChildrenProps) => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        { children }
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default Providers;
