import React, { LinkHTMLAttributes } from 'react';
import { Link as LinkRouterDom } from 'react-router-dom';

import { Container } from './styled';

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  to: string;
}

const Link: React.FC<LinkProps> = ({ to, children }) => (
  <Container>
    <LinkRouterDom to={to}>{children}</LinkRouterDom>
  </Container>
);

export default Link;
