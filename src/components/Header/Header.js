import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {ReactComponent as LogoIcon} from '../../assets/img/logo.svg';

import {Container} from '../../layouts';

import './Header.scss';

const menuLinks = [
  {
    title: 'HomePage',
    alias: '/'
  },
  {
    title: 'AboutPage',
    alias: '/about'
  }
];

const menuItems = menuLinks.map(item => (
  <li key={item.alias}>
    <NavLink to={item.alias}>
      <div className="ui-button isLink">{item.title}</div>
    </NavLink>
  </li>
));

const menuList = <ul className="MenuList">{menuItems}</ul>;

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
          {menuList}
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
