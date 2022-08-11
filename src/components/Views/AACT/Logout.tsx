import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAACTUser from '../../../hooks/useAACTUser';
import useSnackbar from '../../../hooks/useSnackbar';
import LoadingAnimation from '../../Shared/LoadingAnimation';

const Page = styled.div`
  height: 100%;
  width: 100%;
`;

const Logout = () => {
  const user = useAACTUser();
  const snackbar = useSnackbar();
  const navigate = useNavigate();

  React.useEffect(() => {
    user.setUsername('');
    const timeout = setTimeout(() => {
      navigate('/aact/login');
      snackbar.setSuccessMessage('Bye bye! Thanks for visiting :)');
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Page>
      <LoadingAnimation />
    </Page>
  );
};

export default Logout;
