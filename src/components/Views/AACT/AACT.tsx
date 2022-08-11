import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { SnackbarProvider } from '../../../context/snackbar';
import { AACTUserProvider } from '../../../context/aactUser';
import useLocalStorage from '../../../hooks/useLocalStorage';
import Snackbar from '../../Shared/Snackbar';
import Login from './Login';
import Logout from './Logout';
import UserHome from './UserHome';

const AACT = () => {
  const { pathname } = useLocation();
  const [username, setUsername] = useLocalStorage('username', 'Friend');

  return (
    <SnackbarProvider>
      <AACTUserProvider username={username} setUsername={setUsername}>
        <Snackbar />
        <Routes>
          <Route
            path='/'
            element={<Navigate to={`${pathname}/login`} replace={true} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/home' element={<UserHome />} />
        </Routes>
      </AACTUserProvider>
    </SnackbarProvider>
  );
};

export default AACT;
