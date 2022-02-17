import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';



const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
  return (
  <li>
    <Link to={`/edit/${id}`}>
      {description && <p>Description: {description}</p>}
    </Link>
    {amount && <p>Amount: {amount}</p>}
    {(createdAt !== null && (typeof createdAt !== 'undefined')) && <p>Created at: {moment(createdAt).format('Do MMMM YYYY')}</p>}
  </li>
)};
export default ExpenseListItem;
