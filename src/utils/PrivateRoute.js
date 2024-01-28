import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

export default function PrivateRoute() {

  const authToken = Cookies.get('token');

  console.log(authToken)
  
  return (
    (authToken) ? <Outlet /> : <Navigate to={'/login'} />
  )
}
