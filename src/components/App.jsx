import { useState } from 'react';

import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import List from './ContactList';
import { useEffect } from 'react';

function Phonebook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const addContact = (name, number, filter) => {
    const findElement = contacts.find(e => {
      return e.name.toLowerCase().includes(name.toLowerCase());
    });

    if (findElement) {
      alert('Таке вже є');
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      setContacts([...contacts, newContact]);
      setFilter(filter);
    }
  };
  const removeContacts = id => {
    setContacts(
      contacts.filter(e => {
        return e.id !== id;
      })
    );
  };

  function editFilter(value) {
    setFilter(value);
  }

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('contact', JSON.stringify(contacts));
    }
  }, [contacts]);
  useEffect(() => {
    const lItem = JSON.parse(localStorage.getItem('contact'));
    console.log(lItem);
    lItem ? setContacts(lItem) : setContacts([]);
  }, []);

  return (
    <div className="all-pos">
      <ul className="flexator">
        <li>
          <form action="">
            <h1>Phonebook</h1>
            <Form addContact={addContact} />
          </form>
        </li>
        <li>
          <h1>Contacts</h1>
          <Filter filter={editFilter} />
          <List
            contacts={contacts}
            filter={filter}
            removeContacts={removeContacts}
          />
        </li>
      </ul>
    </div>
  );
}

export default Phonebook;
