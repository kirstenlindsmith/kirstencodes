import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from './context/snackbar';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Views/Home';
import AACT from './components/Views/AACT';

export const App = () => (
  <ErrorBoundary>
    <SnackbarProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aact/*' element={<AACT />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  </ErrorBoundary>
);
