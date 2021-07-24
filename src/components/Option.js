import React from 'react';



const Option = (props) => (
  <li className="option">
    <p className="option__text">{ props.count }. { props.text }</p>
    <button
      className="button button--link"
      type="button"
      onClick={ (e) => props.handleDeleteSingleOption(props.text) }
    >
      Remove
    </button>
  </li>
);
export default Option;