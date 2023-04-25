import React from 'react';
import PropTypes from 'prop-types';
export default function Filter({ filter }) {
  return (
    <input
      type="text"
      name="search"
      className="form-control"
      placeholder="Search by name"
      onChange={e => {
        filter(e.target.value);
      }}
    />
  );
}
Filter.propTypes = {
  filter: PropTypes.func,
};
