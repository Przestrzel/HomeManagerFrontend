import React from 'react';
import { ReactComponent as Background } from 'assets/svg/background.svg';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className='layout'>
      <Background />
      { children }
    </div>
  );
};

export default Layout;
