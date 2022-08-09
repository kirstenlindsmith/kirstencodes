import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled.div<{ activeLink: boolean }>`
  width: max-content;
  transition: all ease-out 200ms;
  ${({ activeLink }) =>
    activeLink
      ? `
  cursor: pointer;
  text-decoration: underline;
  &:hover,
  &:focus {
    text-decoration-style: dotted;
  }
`
      : ''}
`;

type Props = {
  children: React.ReactNode;
  url?: string;
  external?: boolean;
};

const Link = ({ children, url, external, ...rest }: Props) => {
  const reactNavigate = useNavigate();

  const externalNavigate = (url: string) => {
    window.location.href = url;
  };

  const activeLink = url?.length > 0;
  const navigate = activeLink
    ? external
      ? externalNavigate
      : reactNavigate
    : undefined;

  return (
    <StyledLink
      activeLink={activeLink}
      tabIndex={activeLink ? 0 : -1}
      onClick={() => navigate(url)}
      onKeyDown={(e) => e.key === 'Enter' && navigate(url)}
      {...rest}
    >
      {children}
    </StyledLink>
  );
};

export default Link;
