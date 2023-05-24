import React from 'react';
import RouterProvider from './providers/RouterProvider';
import Layout from './components/layout/Layout';
import Providers from './providers/Providers';

function App() {
  return (
    <Providers>
      <Layout>
        <RouterProvider />
      </Layout>
    </Providers>
  );
}

export default App;
