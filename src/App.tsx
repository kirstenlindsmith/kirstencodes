import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import NotFoundPage from './components/NotFoundPage';
import Button from './components/Shared/Button';

export const App = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <React.Fragment>
              <h1>COOL STUFF GOES HERE :D</h1>
              <Button>CLICK ME</Button>
            </React.Fragment>
          }
        ></Route>
        <Route element={<NotFoundPage />} />
      </Routes>
    </Router>
  </ErrorBoundary>
);
