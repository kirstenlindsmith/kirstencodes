import React from 'react';

export const SnackbarContext = React.createContext<{
  errorMessage: string | undefined;
  setErrorMessage: (error: string) => void;
  successMessage: string | undefined;
  setSuccessMessage: (message: string) => void;
  genericErrorMessage: () => void;
  clear: () => void;
} | null>(null);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState('');

  const genericErrorMessage = () => {
    setErrorMessage(
      'Something went wrong! Please refresh and try again. If the issue persists, contact me at kelindsmith@gmail.com'
    );
  };

  const clear = () => {
    setErrorMessage(undefined);
    setSuccessMessage(undefined);
  };

  return (
    <SnackbarContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        successMessage,
        setSuccessMessage,
        genericErrorMessage,
        clear,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
