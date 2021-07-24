import React from 'react';



const Action = (props) => (
  <div>
    <button
      className="big-button"
      type="button"
      disabled={ !props.hasOptions }
      onClick={ props.handleChooseOption }
    >
      What should I do?
    </button>
  </div>
);
export default Action;