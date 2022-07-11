import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    --primary-color: #FF9800;
    --secondary-color: #4527A0;
    --tertiary-color: #F5F5F5;
    --quartenary-color: #212121;

    --text-primary-color: #212121;
    --text-secondary-color: #F5F5F5;
    --text-tertiary-color: #212121;
    --text-quaternary-color: #F5F5F5;

    --light-bg-color: #F5F5F5;
    --dark-bg-color: #212121;

    --default-logo-color: #4527A0;
    --default-link-color: #FF6F00;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #E5E5E5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  #root {
    margin: 0 auto;
    min-height: 100vh;
  }
`;
