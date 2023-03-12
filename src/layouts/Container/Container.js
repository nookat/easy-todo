import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Container = ({ children, className, ...attrs }) => {
  const classes = classNames('ui-container', className);

  return (
    <div className={classes} {...attrs}>{children}</div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: '',
};

export default Container;