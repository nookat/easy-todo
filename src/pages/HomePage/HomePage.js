import React, {useState, useEffect} from 'react';
import {Container} from 'layouts';

import {Form} from 'components/Todo';
import {List} from 'components/Todo';

import todos from 'seeders/todos.json';
import tagItems from 'seeders/tags.json';

const HomePage = () => {
  // data from localStorage
  const localItems = JSON.parse(localStorage.getItem('items'));
  // final output
  const items_ = localItems?.length ? localItems : todos;
  const [tags, setTags] = useState(tagItems || []);
  // state
  const [items, setItems] = useState(items_ || []);

  const handleSubmit = (item) => {
    const activeTags = tags.filter(tag => tag.isActive);

    if (!activeTags.length) {
      console.log('Невозможно создать задачу без тега');
      return;
    }

    item.tags = activeTags;

    const newItems = [
      ...items,
      item
    ];
    console.log(items);
    setItems(newItems);
  };

  // remove
  const handleRemoveItem = (id) => {
    const newItems = [...items];
    const idxForRemove = newItems.findIndex((el) => el.id === id);

    if (idxForRemove >= 0) {
      newItems.splice(idxForRemove, 1)
    }

    setItems(newItems);
  }

  // change
  const handleChangeItem = (id) => {
    const newItems = items.map(el => {
      return el.id === id
        ? {
          ...el,
          isChecked: !el.isChecked
        }
        : el;
    });

    setItems(newItems);
  };

  // select tag
  const handleTagClick = (id) => {
    const newTags = tags.map(tag => {
      if (tag.id === id) {
        tag.isActive = !tag.isActive;
      }

      return tag;
    });

    setTags(newTags);
  }

  useEffect(() => {
    // console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
    const defaultTags = tags.map(tag => {
      tag.isActive = false;
      return tag;
    });
    setTags(defaultTags);
  }, [items]);

  return (
    <Container>
      <Form onSubmit={handleSubmit} tags={tags} onTagClick={handleTagClick}/>
      <List items={items}
            onChangeItem={handleChangeItem}
            onRemoveItem={handleRemoveItem}
      />
    </Container>
  );
};

export default HomePage;