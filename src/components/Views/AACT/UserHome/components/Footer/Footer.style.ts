import styled from 'styled-components';
import { ColorValue } from '../../../../../../helpers/colors';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  padding: 2rem 2rem 1.5rem 6.5rem;
  font-weight: bold;
  color: ${ColorValue.white};
  background-color: ${ColorValue.teal};
  img {
    height: 5rem;
    object-fit: contain;
  }
  @media (max-width: 900px) {
    height: auto;
    max-height: 20%;
    padding: 1rem;
    img {
      display: none;
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  @media (max-width: 900px) {
    width: 100%;
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
  flex-wrap: wrap;
  width: 100%;
  font-weight: normal;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FooterSignatureSection = styled.div`
  display: flex;
  margin-right: 0.2rem;
`;
