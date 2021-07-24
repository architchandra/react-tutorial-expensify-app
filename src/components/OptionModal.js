import React from 'react';
import Modal from 'react-modal';



const OptionModal = (props) => (
  <Modal
    isOpen={ !!props.selectedOption }
    onRequestClose={ props.handleClearSelectedOption }
    contentLabel="Selected Option"
    closeTimeoutMS={ 200 }
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    { props.selectedOption && <p class="modal__body">{ props.selectedOption }</p> }
    <button
      className="button"
      type="button"
      onClick={ props.handleClearSelectedOption }
    >
      Close
    </button>
  </Modal>
);
export default OptionModal;