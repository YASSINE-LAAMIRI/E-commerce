import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const user = useSelector((state)=>state.authReducer.user)
  return user.isAdmin ? <Outlet/> : <Navigate to="/login"/>;
};

export default AdminRoute;
