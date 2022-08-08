import React from 'react';

export const SnackbarContext = React.createContext<{
  setErrorMessage: (error: string) => void;
  setSuccessMessage: (message: string) => void;
  openSnackbar: (payload: { isError: boolean; message: string }) => void;
  errorMessage: string | undefined;
  successMessage: string | undefined;
  genericErrorMessage: () => void;
  clear: () => void;
} | null>(null);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [errorMessage, updateErrorMessage] = React.useState<
    string | undefined
  >();
  const [successMessage, updateSuccessMessage] = React.useState<
    string | undefined
  >();

  const setErrorMessage = (error: string) => updateErrorMessage(error);

  const setSuccessMessage = (message: string) => updateSuccessMessage(message);

  const clear = () => {
    updateErrorMessage(undefined);
    updateSuccessMessage(undefined);
  };

  const genericErrorMessage = () => {
    updateErrorMessage(
      'Something went wrong! Please refresh and try again. If the issue persists, contact me at kelindsmith@gmail.com'
    );
  };

  const values = React.useMemo(() => {
    const openSnackbar = ({
      message,
      isError,
    }: {
      message: string;
      isError: boolean;
    }) => {
      isError ? setErrorMessage(message) : setSuccessMessage(message);
    };

    return {
      setErrorMessage,
      setSuccessMessage,
      clear,
      openSnackbar,
      genericErrorMessage,
    };
  }, []);
  return (
    <SnackbarContext.Provider
      value={{
        ...values,
        errorMessage,
        successMessage,
        genericErrorMessage,
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
};
