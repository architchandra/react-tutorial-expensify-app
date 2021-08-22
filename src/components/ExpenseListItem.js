import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';



const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
  <li>
    <Link to={`/edit/${id}`}>
      {description && <p>Description: {description}</p>}
    </Link>
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