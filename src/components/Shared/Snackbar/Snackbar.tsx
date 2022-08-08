import React from 'react';
import useSnackbar from '../../../hooks/useSnackbar';
import { CloseButton } from '../Button/CustomButtons';
import { StyledSnackbar, SnackbarContent } from './Snackbar.style';
import { colorValues } from '../../../helpers/colors';

const Snackbar = () => {
  const [open, setOpen] = React.useState(false);
  const snackbar = useSnackbar();
  const isError = React.useMemo(
    () => (snackbar?.errorMessage ?? '').length > 0,
    [snackbar.errorMessage]
  );

  React.useEffect(() => {
    if (snackbar?.errorMessage || snackbar?.successMessage) {
      setOpen(true);
    }
  }, [snackbar?.errorMessage, snackbar?.successMessage]);

  const handleClose = () => {
    snackbar?.clear();
    setOpen(false);
  };

  return (
    <StyledSnackbar open={open}>
      <SnackbarContent role='alert' error={isError}>
        <div>{snackbar?.errorMessage || snackbar?.successMessage}</div>
        <CloseButton
          onClose={handleClose}
          backdropColor={isError ? colorValues.orangeRed : colorValues.green}
        />
      </SnackbarContent>
    </StyledSnackbar>
  );
};

export default Snackbar;
