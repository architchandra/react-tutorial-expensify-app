import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import getExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';



const ExpensesSummary = (props) => {
  const hasExpenses = props.expenses.length;
  const hasOnlyOneExpense = props.expenses.length === 1;
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h2 className="page-header__title">
          <span>{props.expenses.length + (hasOnlyOneExpense ? ' expense' : ' expenses')}</span> found, totalling <span>{numeral(getExpensesTotal(props.expenses)).format('$0,0.00')}</span>.
        </h2>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  expenses: getExpenses(state.expenses, state.filters),
});



export { ExpensesSummary };
export default connect(mapStateToProps)(ExpensesSummary);
