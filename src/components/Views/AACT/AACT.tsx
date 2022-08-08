import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SnackbarProvider } from '../../../context/snackbar';
import Snackbar from '../../Shared/Snackbar';
import Login from './Login';
import UserHome from './UserHome';

const AACT = () => {
  const { pathname } = useLocation();

  return (
    <SnackbarProvider>
      <Snackbar />
      <Routes>
        <Route
          path='/'
          element={<Navigate to={`${pathname}/login`} replace={true} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<UserHome />} />
      </Routes>
    </SnackbarProvider>
  );
};

export default AACT;
