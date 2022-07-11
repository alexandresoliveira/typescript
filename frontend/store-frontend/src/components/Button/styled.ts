import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonStyleProps {
  primaryColor?: string;
}

export const Container = styled.button<ButtonStyleProps>`
  margin: 16px 0px;
  padding: 16px;
  height: 56px;
  border: none;
  border-radius: 10px;
  background-color: ${props =>
    props.primaryColor ? props.primaryColor : '#ff9100'};
  color: #000000;
  font-weight: bold;
  width: 100%;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  transition: box-shadow 0.2s, background-color 0.2s;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    background-color: ${props =>
      shade(-0.3, props.primaryColor ? props.primaryColor : '#ff9100')};
  }
  > svg {
    font-size: 24px;
  }
`;
