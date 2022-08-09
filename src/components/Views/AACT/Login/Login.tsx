import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSnackbar from '../../../../hooks/useSnackbar';
import aact from '../../../../assets/AACT.png';
import Button from '../../../Shared/Button';
import { Page } from '../AACT.style';
import { FormSection, InputWrapper, InputLabel, Input } from './Login.style';

const Login = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
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
      snackbar.setSuccessMessage(`Welcome ${username}!`);
      navigate('/aact/home');
    }
  };

  return (
    <Page>
      <FormSection>
        <img src={aact} />
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <InputWrapper style={{ marginBottom: '1rem' }}>
            <InputLabel htmlFor='name'>Name</InputLabel>
            <Input
              type='text'
              name='name'
              value={username}
              placeholder='What is your name?'
              onChange={(e) => setUsername(e.currentTarget.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              type='password'
              name='password'
              value={password}
              placeholder='Tell me a secret'
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </InputWrapper>
          <Button
            type='submit'
            color='blue'
            fullWidth
            style={{ marginTop: '2rem' }}
          >
            Submit
          </Button>
        </form>
      </FormSection>
    </Page>
  );
};

export default Login;