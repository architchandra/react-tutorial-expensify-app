import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';



const ExpensesSummary = (props) => {
  const hasExpenses = props.expenses.length;
  const hasOnlyOneExpense = props.expenses.length === 1;
  
  return (
    hasExpenses
      ? <p>
          {props.expenses.length + (hasOnlyOneExpense ? ' expense' : ' expenses')} found, totalling {numeral(getExpensesTotal(props.expenses)).format('$0,0.00')}.
        </p>
      : ''
  );
};
const mapStateToProps = (state) => ({
  expenses: getExpenses(state.expenses, state.filters),
});



export default connect(mapStateToProps)(ExpensesSummary);
