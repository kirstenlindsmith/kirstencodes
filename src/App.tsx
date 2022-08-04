import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';
import Home from './components/Views/Home';

export const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);
