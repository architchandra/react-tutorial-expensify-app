import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import getExpenses from '../selectors/expenses.js';
import getExpensesTotal from '../selectors/expenses-total.js';



const ExpenseList = (props) => (
  <div>
    <ul>
      {
        props.expenses.length === 0
          ? <p>No expenses found.</p>
          : props.expenses.map((expense, index) => <ExpenseListItem key={expense.id} {...expense} />)
      }
    </ul>
  </div>
);
const mapStateToProps = (state) => ({
  expenses: getExpenses(state.expenses, state.filters)
});
export { ExpenseList };
export default connect(mapStateToProps)(ExpenseList);
