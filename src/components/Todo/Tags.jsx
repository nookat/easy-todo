import React, {Fragment} from 'react';
import classNames from 'classnames';

const Tags = ({ items, isVertical = false, onTagClick }) => {
  const tagsClasses = classNames(
    'tags',
    'ui-button-group',
    isVertical
  )

  return (
    <ul className={tagsClasses}>
      {
        items && items.map(({ id, title, isActive }) => {
          return <Fragment key={id}>
              {onTagClick
                ? <span className={`ui-tag ${isActive ? 'isActive' : ''}`}
                         onClick={() => onTagClick(id)}>{title}</span>
                : <span className="ui-tag">{title}</span>
              }
            </Fragment>
        })
      }
    </ul>
  )
}

export default Tags;