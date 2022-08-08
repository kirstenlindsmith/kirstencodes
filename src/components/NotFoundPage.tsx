import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Shared/Button';
import {
  PinkPage,
  CenteredContent,
  BlueH1,
  StackedButtons,
} from './Shared/Shared.style';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <PinkPage style={{ justifyContent: 'center' }}>
      <CenteredContent>
        <BlueH1>Sorry, but the page you’re looking for doesn’t exist!</BlueH1>
        <StackedButtons>
          <Button onClick={() => navigate('/')}>return home</Button>
          <Button color={'orange'} onClick={() => navigate(-1)}>
            GO BACK
          </Button>
        </StackedButtons>
      </CenteredContent>
    </PinkPage>
  );
};

export default NotFoundPage;
