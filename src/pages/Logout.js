import React from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  // удаление токена авторизации из localStorage
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  // перенаправление на страницу логина
  return <Navigate to="/login" />;
};

export default Logout;