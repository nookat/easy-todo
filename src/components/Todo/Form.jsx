import React, {useState} from 'react';
import {v4 as fakeId} from 'uuid';

import {Tags} from 'components/Todo';

const Form = ({ onSubmit, tags }) => {
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: fakeId(),
      title,
      isChecked: false
    };

    if (!tag) {
      console.log('Невозможно создать задачу без тэга');
      return;
    } else {
      item.tag = tag;
    }

    onSubmit(item);
    setTitle('');
  };

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTagClick = (id) => {
    const tag = tags.filter(tag => tag.id === id)[0];
    if (tag) {
      setTag(tag.title);
    } else {
      throw new Error(`Не найден тэг с id: ${id}`);
    }
  }

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
      <Tags items={tags} onTagClick={handleTagClick}/>
    </div>
  );
};

export default Form;