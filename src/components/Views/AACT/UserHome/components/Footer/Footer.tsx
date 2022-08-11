import React from 'react';
import AACTwhite from '../../../../../../assets/AACTwhite.png';
import Link from '../../../../../Shared/Link';
import {
  StyledFooter,
  FooterContent,
  FooterList,
  FooterSignature,
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
        Built by Kirsten Lindsmith | kelindsmith@gmail.com | ©2022
      </FooterSignature>
      <img src={AACTwhite} aria-label='AACT' />
    </FooterContent>
  </StyledFooter>
);

export default Footer;
