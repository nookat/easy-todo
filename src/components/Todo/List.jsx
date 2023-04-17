import React from 'react';

import {Tags} from 'components/Todo';

const List = ({ items, onChangeItem, onRemoveItem }) => {
  return (
    <div className="view-sm flex flex-col">
      {
        items
        && items.length
          ? items.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="ui-checkbox">
                <input
                  id={item.id}
                  type="checkbox"
                  checked={item.isChecked}
                  onChange={() => onChangeItem(item.id)}
                />
                <label htmlFor={item.id}>{item.title}</label>
                <Tags items={item.tags}/>
              </div>
              <span
                className="ui-link pl-2 text-sm"
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </span>
            </div>
          ))
          : 'Not found list'
      }
    </div>
  );
};

export default List;