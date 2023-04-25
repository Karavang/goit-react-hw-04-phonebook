import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <div className="form">
      <h3 className="area-for-enter">Name</h3>
      <input
        type="text"
        name="name"
        value={name}
        className="form-control"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => setName(e.target.value)}
      />
      <h3 className="area-for-enter">Number</h3>
      <input
        type="tel"
        name="number"
        value={number}
        className="form-control"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={e => setNumber(e.target.value)}
      />
      <button
        className="btn btn-primary add-contact"
        onClick={e => {
          e.preventDefault();

          addContact(name, number);
          setName('');
          setNumber('');
        }}
      >
        Add
      </button>
    </div>
  );
}

Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
