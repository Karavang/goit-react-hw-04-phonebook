import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <div className="form">
        <h3 className="area-for-enter">Name</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          className="form-control"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <h3 className="area-for-enter">Number</h3>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          className="form-control"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={e => {
            this.setState({ number: e.target.value });
          }}
        />
        <button
          className="btn btn-primary add-contact"
          onClick={e => {
            e.preventDefault();

            this.props.addContact(this.state.name, this.state.number);

            this.setState({
              name: '',
              number: '',
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
Form.propTypes = {
  addContact: PropTypes.func.isRequired,
};
