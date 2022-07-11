import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Content, HeaderWrapper, Header, StoreLogo } from './styles';

interface Props {
  variant: 'orange' | 'purple' | 'white' | 'black';
  title: string;
  description: string;
}

const Section: React.FC<Props> = ({ variant, title, description }) => {
  const history = useHistory();

  const handleAccess = useCallback(() => {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }, []);

  const togglePlanPrices = useCallback(() => {
    history.push('/plans-prices');
  }, [history]);

  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <StoreLogo />
            <span>Store</span>
          </h1>
          <div>
            <button type="button" onClick={togglePlanPrices}>
              Planos
            </button>
            <button type="button" onClick={handleAccess}>
              Acessar
            </button>
          </div>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
