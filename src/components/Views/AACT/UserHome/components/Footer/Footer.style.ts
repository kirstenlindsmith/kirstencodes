import styled from 'styled-components';
import { ColorValue } from '../../../../../../helpers/colors';

export const StyledFooter = styled.footer`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 2rem 1.5rem 6.5rem;
  font-weight: bold;
  color: ${ColorValue.white};
  background-color: ${ColorValue.teal};
  @media (max-width: 900px) {
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
  width: 100%;
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
  flex-wrap: wrap;
  width: 100%;
  font-weight: normal;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FooterSignatureSection = styled.div`
  display: flex;
`;
