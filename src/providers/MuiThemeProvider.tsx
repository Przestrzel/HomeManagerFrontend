import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { IChildrenProps } from '../types/components.types';

const MuiThemeProvider = ({ children }: IChildrenProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0C6A50',
        light: '#289375',
      },
      secondary: {
        main: '#158063',
        light: '#01543D',
      }
    }
  });

  return (
    <ThemeProvider theme={ theme }>
      { children } 
    </ThemeProvider>
  );
};
export default MuiThemeProvider;