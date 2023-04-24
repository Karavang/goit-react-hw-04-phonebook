import { Component } from 'react';

import React from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import List from './ContactList';

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  addContact = (name, number, filter) => {
    const findElement = this.state.contacts.find(e => {
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

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        filter: prevState.filter,
      }));
    }
  };

  componentDidMount() {
    const lItem = localStorage.getItem('contact');
    lItem
      ? this.setState({
          contacts: JSON.parse(lItem),
        })
      : this.setState({
          contacts: [],
        });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contact', JSON.stringify(this.state.contacts));
    }
  }
  removeContacts = id => {
    this.setState({
      contacts: this.state.contacts.filter(e => {
        return e.id !== id;
      }),
    });
  };

  editFilter = value => {
    this.setState({
      filter: value,
    });
  };

  render() {
    return (
      <div className="all-pos">
        <ul className="flexator">
          <li>
            <form action="">
              <h1>Phonebook</h1>
              <Form addContact={this.addContact} />
            </form>
          </li>
          <li>
            <h1>Contacts</h1>
            <Filter filter={this.editFilter} />
            <List
              contacts={this.state.contacts}
              filter={this.state.filter}
              removeContacts={this.removeContacts}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Phonebook;
