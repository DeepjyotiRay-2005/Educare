import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {
  const auth = localStorage.getItem('user');
  
  const handleRedirect = () => {
    alert('Please login first to access the tools');
    return <Navigate to='/login' />;
  };

  return auth ? <Outlet /> : handleRedirect();
};

export default PrivateComponent;
