import React from 'react';
import AACTwhite from '../../../../../../assets/AACTwhite.png';
import Link from '../../../../../Shared/Link';
import {
  StyledFooter,
  FooterContent,
  FooterList,
  FooterSignature,
  FooterSignatureSection,
} from './Footer.style';

const Footer = () => (
  <StyledFooter>
    <FooterContent>
      <FooterList>
        <Link url='/'>Home</Link>
        <Link external url='https://linkedin.com/in/kirstenlindsmith'>
          About
        </Link>
        <Link external url='https://github.com/kirstenlindsmith/kirstencodes'>
          Github
        </Link>
      </FooterList>
      <FooterSignature>
        <FooterSignatureSection>
          Built by Kirsten Lindsmith
        </FooterSignatureSection>
        <FooterSignatureSection>| kelindsmith@gmail.com</FooterSignatureSection>
      </FooterSignature>
    </FooterContent>
    <img src={AACTwhite} aria-label='AACT' />
  </StyledFooter>
);

export default Footer;
