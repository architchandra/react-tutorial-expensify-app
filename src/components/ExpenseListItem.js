import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';



const ExpenseListItem = ({id, description, note, amount, createdAt}) => {
  return (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      {description && <h3 className="list-item__title">{description}</h3>}
      {(createdAt !== null && (typeof createdAt !== 'undefined')) && <span className="list-item__subtitle">Added on {moment(createdAt).format('Do MMMM YYYY')}</span>}
    </div>
    {amount && <h3 className="list-item__data">{numeral(amount).format('$0,0.00')}</h3>}
  </Link>
)};
export default ExpenseListItem;
