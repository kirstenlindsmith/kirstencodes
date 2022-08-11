import React from 'react';
import loading from '../../assets/loading.gif';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 7rem;
    width: 7rem;
    object-fit: contain;
  }
`;

const LoadingAnimation = () => (
  <LoaderContainer>
    <img src={loading} aria-label='loading' />
  </LoaderContainer>
);

export default LoadingAnimation;
