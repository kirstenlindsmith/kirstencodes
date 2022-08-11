import styled from 'styled-components';
import { ColorValue } from '../../../../../../helpers/colors';

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 2rem 1.5rem 6.5rem;
  font-weight: bold;
  color: ${ColorValue.white};
  background-color: ${ColorValue.teal};
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  img {
    position: absolute;
    right: 0;
    top: calc(50% - 2.5rem);
    height: 5rem;
    object-fit: contain;
  }
`;

export const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const FooterSignature = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: normal;
`;
