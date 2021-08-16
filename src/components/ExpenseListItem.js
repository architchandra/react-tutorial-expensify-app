import React from 'react';



const ExpenseListItem = ({id, description, note, amount, createdAt}) => (
  <li>
    {description && <p>Description: {description}</p>}
    {amount && <p>Amount: {amount}</p>}
    {!!(createdAt) && <p>Created at: {createdAt}</p>}
  </li>
);
export default ExpenseListItem;