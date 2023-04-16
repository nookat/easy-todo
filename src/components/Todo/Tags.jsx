import React from 'react';
import classNames from 'classnames';

const Tags = ({ items, isVertical, onTagClick }) => {
  const tagsClasses = classNames(
    'ui-button-group',
    'rembo',
    isVertical ? 'isVertical' : false
  )

  return (
    <ul className={tagsClasses}>
      {
        items && items.map(({ id, title, isActive }) => (
          <span className={`ui-tag ${isActive ? 'isActive' : ''}`}
                key={id}
                onClick={() => onTagClick(id)}>{title}</span>
        ))
      }
    </ul>
  )
}

export default Tags;