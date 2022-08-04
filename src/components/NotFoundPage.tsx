import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Shared/Button';

const Text = styled.p`
  width: 333px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 48px;
  margin-bottom: 73px;
  text-align: center;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Content>
        <Text>Sorry, but the page you’re looking for doesn’t exist!</Text>
        <Link to='/'>
          <Button>return home</Button>
        </Link>
        <Button onClick={() => navigate(-1)}>GO BACK</Button>
      </Content>
    </Page>
  );
};

export default NotFoundPage;
