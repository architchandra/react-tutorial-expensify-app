import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';



const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
  <li>
    {description && <p>Description: {description}</p>}
    {amount && <p>Amount: {amount}</p>}
    {!!(createdAt) && <p>Created at: {createdAt}</p>}
    <button type="button" onClick={(e) => {
      dispatch(removeExpense({ id }));
    }}>
      Remove
    </button>
  </li>
);
export default connect()(ExpenseListItem);