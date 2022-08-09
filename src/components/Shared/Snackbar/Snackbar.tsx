import React from 'react';
import useSnackbar from '../../../hooks/useSnackbar';
import { CloseButton } from '../Button/CustomButtons';
import ClickAwayListener from '../ClickAwayListener';
import { StyledSnackbar, SnackbarContent } from './Snackbar.style';
import { ColorValue } from '../../../helpers/colors';

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
    setOpen(false);
    snackbar?.clear();
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      {open ? (
        <StyledSnackbar>
          <SnackbarContent role='alert' error={isError}>
            {snackbar?.errorMessage || snackbar?.successMessage}
            <CloseButton
              onClose={handleClose}
              backdropColor={isError ? ColorValue.orangeRed : ColorValue.green}
            />
          </SnackbarContent>
        </StyledSnackbar>
      ) : null}
    </ClickAwayListener>
  );
};

export default Snackbar;
