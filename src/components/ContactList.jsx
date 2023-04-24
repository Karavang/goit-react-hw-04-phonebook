import React from 'react';
import PropTypes from 'prop-types';

export default function List({ contacts, filter, removeContacts }) {
  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  return (
    <div className="scrollable-list">
      <ul className="listContacts">
        {filter
          ? filteredContacts.map(e => (
              <li key={e.id}>
                <b>{e.name}</b> - {e.number}
                <img
                  className="bin"
                  src="https://cdn-icons-png.flaticon.com/512/93/93951.png?w=826&t=st=1680885338~exp=1680885938~hmac=e3ff59ddc6694a6128bf23177a414fccd8e9dbe6d5be431c2bfc65f90cce7f51"
                  alt=""
                  onClick={() => {
                    removeContacts(e.id);
                  }}
                />
              </li>
            ))
          : contacts.map(e => (
              <li key={e.id}>
                <b>{e.name}</b> - {e.number}
                <img
                  className="bin"
                  src="https://cdn-icons-png.flaticon.com/512/93/93951.png?w=826&t=st=1680885338~exp=1680885938~hmac=e3ff59ddc6694a6128bf23177a414fccd8e9dbe6d5be431c2bfc65f90cce7f51"
                  alt=""
                  onClick={() => {
                    removeContacts(e.id);
                  }}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}
List.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  removeContacts: PropTypes.func.isRequired,
};
