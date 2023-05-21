import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider as ReactRouterProvider } from 'react-router-dom'
import Login from '../auth/login/Login'

const RouterProvider = () => {
  const publicRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route path="login" element={<Login />} />
      </Route>
    )
  )

  return (
    <ReactRouterProvider router={publicRoutes} />
  )
}

export default RouterProvider