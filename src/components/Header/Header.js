import React from 'react';
import {ReactComponent as LogoIcon} from '../../assets/img/logo.svg';

import {Container} from '../../layouts';

const Header = () => (
  <div className="Header">
    <Container>
      <LogoIcon/>
      <p>header</p>
    </Container>
  </div>
);

export default Header;
