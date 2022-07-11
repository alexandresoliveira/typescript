import styled, { css } from 'styled-components';

interface ContainerProps {
  isFilled: boolean;
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  min-width: 100%;
  padding: 16px;
  border-radius: 10px;
  border: 2px solid #b0bec5;
  color: #757575;
  & + div {
    margin-top: 10px;
  }
  ${props =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #ff9100;
      border-color: #ff9100;
    `}
  ${props =>
    props.isFilled &&
    !props.isErrored &&
    css`
      color: #ff9100;
      border-color: #ff9100;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #212121;
    &::placeholder {
      color: #757575;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  font-size: 12px;
  color: #c53030;
`;
