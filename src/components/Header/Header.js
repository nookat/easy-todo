import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {ReactComponent as LogoIcon} from '../../assets/img/logo.svg';

import {Container} from '../../layouts';

const Header = ({ isLogo, className, ...attrs }) => {
  const classes = classNames(
    'Header',
    className
  );

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className="flex justify-between py-2 mb-4">
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
    </header>
  );
};

Header.propTypes = {
  isLogo: PropTypes.bool,
  className: PropTypes.string,
  attrs: PropTypes.object
};

Header.defaultProps = {
  isLogo: false,
  className: ''
};

export default Header;
