import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSnackbar from '../../../../hooks/useSnackbar';
import useAACTUser from '../../../../hooks/useAACTUser';
import useMobile from '../../../../hooks/useMobile';
import aact from '../../../../assets/AACT.png';
import Button from '../../../Shared/Button';
import Input from '../../../Shared/Input';
import { ArrowLeftButton } from '../../../Shared/Button/CustomButtons';
import { LoginPage, FormSection } from './Login.style';

const Login = () => {
  const isMobile = useMobile();
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const user = useAACTUser();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username && !password) {
      snackbar.setErrorMessage('Please enter your name and password.');
    } else if (!username) {
      snackbar.setErrorMessage('Please enter your name.');
    } else if (!password) {
      snackbar.setErrorMessage('Please enter your password.');
    } else {
      user.setUsername(username);
      snackbar.setSuccessMessage(`Welcome, ${username} :)`);
      navigate('/aact/home');
    }
  };

  return (
    <LoginPage style={{ alignItems: 'center' }}>
      <FormSection>
        <img src={aact} aria-label='AACT' />
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <Input
            name='name'
            value={username}
            setValue={setUsername}
            placeholder='What is your name?'
            wrapperStyle={{ marginBottom: '1rem' }}
          />
          <Input
            name='password'
            type='password'
            value={password}
            setValue={setPassword}
            placeholder='Tell me a secret'
          />
          <Button
            type='submit'
            color='blue'
            fullWidth
            style={{ marginTop: '2rem' }}
          >
            Submit
          </Button>
        </form>
        <ArrowLeftButton
          aria-label='Home'
          onClick={() => navigate('/')}
          style={{
            top: isMobile ? '10%' : '10.6rem',
            left: isMobile ? 0 : '-4rem',
          }}
        />
      </FormSection>
    </LoginPage>
  );
};

export default Login;
