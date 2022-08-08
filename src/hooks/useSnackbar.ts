import React from 'react';
import { SnackbarContext } from '../context/snackbar';

const useSnackbar = () => {
  const context = React.useContext(SnackbarContext);

  if (context === undefined) {
    throw new Error(
      'The useSnackbar hook must be used within a SnackbarProvider component'
    );
  }
  return context;
};

export default useSnackbar;
