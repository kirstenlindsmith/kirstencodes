import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  img {
    height: 5rem;
    object-fit: contain;
    margin-right: 1rem;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
`;

export const UserSection = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
`;

export const UserDivider = styled.p`
  margin: 0 0.5rem;
  font-weight: normal;
`;
