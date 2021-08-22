import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
  <li>
    <Link to={`/edit/${id}`}>
      {description && <p>Description: {description}</p>}
    </Link>
    {amount && <p>Amount: {amount}</p>}
    {!!(createdAt) && <p>Created at: {createdAt}</p>}
  </li>
);
export default ExpenseListItem;