import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding: 16px;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  background: transparent;
  transition: box-shadow 0.2s;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
  a {
    text-decoration: none;
    font-weight: bold;
    color: #000000;
  }
`;
