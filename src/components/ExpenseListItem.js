import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
  return (
  <li>
    <Link to={`/edit/${id}`}>
      {description && <p>Description: {description}</p>}
    </Link>
    {amount && <p>Amount: {numeral(amount).format('$0,0.00')}</p>}
    {(createdAt !== null && (typeof createdAt !== 'undefined')) && <p>Created at: {moment(createdAt).format('Do MMMM YYYY')}</p>}
  </li>
)};
export default ExpenseListItem;
