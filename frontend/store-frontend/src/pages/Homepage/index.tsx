import React from 'react';
import { Container } from './styles';

import Section from '../../components/Section';
import SideMenu from '../../components/SideMenu';
import MenuForm from '../../components/MenuForm';

import data from './data';

const Homepage: React.FC = () => (
  <Container>
    <Section
      variant="orange"
      title={data[0].title}
      description={data[0].description}
    />
    <Section
      variant="purple"
      title={data[1].title}
      description={data[1].description}
    />
    <Section
      variant="orange"
      title={data[2].title}
      description={data[2].description}
    />
    <Section
      variant="white"
      title={data[3].title}
      description={data[3].description}
    />
    <Section
      variant="black"
      title={data[4].title}
      description={data[4].description}
    />
    <SideMenu>
      <MenuForm />
    </SideMenu>
  </Container>
);

export default Homepage;
