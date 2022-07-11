import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

declare global {
  interface Window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const SideMenu: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const classes = [isActive ? 'open' : '', scrollY <= 300 ? 'scrollOpen' : ''];
  const className = classes.join(' ').trim();

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
      setIsActive(false);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleActiveMenu = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  window.toggleActiveMenu = toggleActiveMenu;

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
