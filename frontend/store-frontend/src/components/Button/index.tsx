import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primaryColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, primaryColor, ...rest }) => (
  <Container type="button" primaryColor={primaryColor} {...rest}>
    {children}
  </Container>
);

export default Button;
