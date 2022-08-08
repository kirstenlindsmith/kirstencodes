import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Shared/Button';
import { colorValues } from '../helpers/colors';

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colorValues.pink};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  text-align: center;
  color: ${colorValues.blue};
`;

const Buttons = styled.div`
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Content>
        <Text>Sorry, but the page you’re looking for doesn’t exist!</Text>
        <Buttons>
          <Button onClick={() => navigate('/')}>return home</Button>
          <Button color={'secondary'} onClick={() => navigate(-1)}>
            GO BACK
          </Button>
        </Buttons>
      </Content>
    </Page>
  );
};

export default NotFoundPage;
