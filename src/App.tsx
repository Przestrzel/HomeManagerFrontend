import React, { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';
import Providers from './providers/Providers';
import useAuthStore from './auth/store/auth.store';
import { Navigate, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('./auth/login/Login'));

function App() {
  const { user, setUser } = useAuthStore(state => ({
    user: state.user,
    setUser: state.setUser
  }));

  return (
    <Providers>
      <Layout>
        <Suspense fallback={ <div>TODO loading...</div> }>
          {
            !user ?
              <Routes>
                <Route path='login' element={ <Login /> } />
                <Route path='*' element={ <Navigate to='/login' /> } />
              </Routes> :
              <Routes>
                <Route path='/' element={ <div>Home</div> } />
                <Route path='*' element={ <Navigate to='/' /> } />
              </Routes>
          }
        </Suspense>
      </Layout>
    </Providers>
  );
}

export default App;
