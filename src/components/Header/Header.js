import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as LogoIcon} from '../../assets/img/logo.svg';

import {Container} from '../../layouts';

const Header = ({ isLogo, isFixed }) => {
  return (
    <Container>
      <div className={`Header flex justify-between py-2 mb-4 ${isFixed && 'isFixed'}`}>
        <div className="Logo">
          {isLogo && <LogoIcon/>}
          <span>React app</span>
        </div>
        <ul className="ui-button-group">
          <li className="ui-link">Home</li>
          <li className="ui-link">About</li>
        </ul>
      </div>
    </Container>
  );
};

Header.propTypes = {
  isLogo: PropTypes.bool,
  isFixed: PropTypes.bool
};

Header.defaultProps = {
  isLogo: false,
  isFixed: true
};

export default Header;
