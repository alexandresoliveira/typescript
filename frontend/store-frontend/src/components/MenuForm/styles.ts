import styled from 'styled-components';
import { FaStore } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 600px;
  }

  form {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 32px;
    max-width: 600px;
    justify-content: center;

    &.hidden {
      display: none;
    }

    a {
      font-weight: bold;
      color: var(--default-link-color);
    }

    > .title {
      font-size: 36px;
      font-weight: bold;
    }

    > .subtitle {
      font-size: 16px;
      margin-top: 3px;
      margin-bottom: 48px;
    }

    > .terms {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 16px 0;

      input[type='chekbox'] {
        cursor: pointer;
      }

      span {
        font-size: 16px;
        opacity: 0.6;
        margin-left: 6px;
      }
    }
  }

  form#sign-up {
    &.hidden {
      display: none;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-tertiary-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    font-size: 16px;

    > svg {
      font-size: 24px;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    > h1 {
      display: none;
    }
  }
`;

export const StoreLogo = styled(FaStore)`
  width: 36px;
  height: 32px;
  fill: var(--default-logo-color);
`;
