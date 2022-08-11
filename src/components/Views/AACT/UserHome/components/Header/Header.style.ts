import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  margin-bottom: 4rem;
  border-radius: 0.5rem;
  img {
    height: 5rem;
    object-fit: contain;
    margin-right: 1rem;
  }
  @media (max-width: 900px) {
    margin-top: 1rem;
    max-height: 3%;
    img {
      height: 4rem;
    }
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    img {
      max-height: 3rem;
    }
    h1 {
      font-size: 1rem;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
`;

export const UserGreeting = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const UserDivider = styled.p`
  margin: 0 0.5rem;
  font-weight: normal;
`;
