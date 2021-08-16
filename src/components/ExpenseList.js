import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getExpenses from '../selectors/expenses.js';



const ExpenseList = (props) => (
  <div>
    <h3>Expense List</h3>
    <ul>
      {/* Props can be passed in as an object */}
      {props.expenses.map((expense, index) => <ExpenseListItem key={expense.id} {...expense} />)}
    </ul>
  </div>
);
const mapStateToProps = (state) => ({
  expenses: getExpenses(state.expenses, state.filters)
});
export default connect(mapStateToProps)(ExpenseList);