import React, {useState, useEffect} from 'react';
import {Container} from 'layouts';

import {Form} from 'components/Todo';
import {List} from 'components/Todo';

import todos from 'seeders/todos.json';

const HomePage = () => {
  // data from localStorage
  const localItems = JSON.parse(localStorage.getItem('items'));
  // final output
  const items_ = localItems?.length ? localItems : todos;
  // state
  const [items, setItems] = useState(items_ || []);

  const handleSubmit = (item) => {
    const newItems = [
      ...items,
      item
    ];
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

  useEffect(() => {
    // console.log(items);
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}/>
      <List items={items}
            onChangeItem={handleChangeItem}
            onRemoveItem={handleRemoveItem}
      />
    </Container>
  );
};

export default HomePage;