import styled from 'styled-components';
import { FaStore } from 'react-icons/fa';

export const Container = styled.div`
  --padding-top: 100px;
  --padding-bottom: 120px;
  --heading-font-size: 32px;
  --content-width: 100%;

  &.orange {
    --bg-color: var(--primary-color);
    --text-color: var(--text-primary-color);
    --logo-color: var(--secondary-color);
  }

  &.purple {
    --bg-color: var(--secondary-color);
    --text-color: var(--text-secondary-color);
    --logo-color: var(--primary-color);
  }

  &.white {
    --bg-color: var(--tertiary-color);
    --text-color: var(--text-tertiary-color);
    --logo-color: var(--default-logo-color);
  }

  &.black {
    --bg-color: var(--quartenary-color);
    --text-color: var(--text-quaternary-color);
    --logo-color: var(--default-logo-color);
  }

  &:first-child {
    --padding-top: 130px;
    --padding-bottom: 120px;
    --heading-font-size: 51px;

    @media (min-width: 1024px) {
      --content-width: 50%;
      --heading-font-size: 71px;
    }
  }

  background: var(--bg-color);
  position: relative;
`;

export const Content = styled.div`
  z-index: 2;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: var(--padding-top) 32px var(--padding-bottom);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    font-size: var(--heading-font-size);
    color: var(--text-color);
    max-width: var(--content-width);
  }

  > p {
    margin-top: 20px;
    font-size: 16px;
    color: var(--text-color);
    max-width: var(--content-width);
  }
`;

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  clip: rect(auto auto auto auto);
`;

export const Header = styled.header`
  z-index: 3;
  background-color: var(--bg-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--text-color);
      margin-left: 10px;
      font-size: 29px;
    }
  }

  > div {
    button {
      margin-left: 12px;
      color: var(--text-color);
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      font-size: 16px;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;

export const StoreLogo = styled(FaStore)`
  width: 36px;
  height: 32px;
  fill: var(--logo-color);
`;
