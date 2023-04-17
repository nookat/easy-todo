import React, {useState} from 'react';
import {v4 as fakeId} from 'uuid';

import {Tags} from 'components/Todo';

const Form = ({ onSubmit, tags, onTagClick }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: fakeId(),
      title,
      isChecked: false
    };

    onSubmit(item);
    setTitle('');
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="mb-3">
      <form className="view-sm flex items-end mb-1" onSubmit={handleSubmit}>
        <div className="ui-input" style={{ width: '100%' }}>
          <label htmlFor="input-DqS1">Enter todo</label>
          <input
            required
            id="input-DqS1"
            type="text"
            value={title}
            placeholder="Enter todo here"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="ui-button isPrimary">Submit</button>
      </form>
      <Tags items={tags} onTagClick={onTagClick}/>
    </div>
  );
};

export default Form;