import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



const EditExpensePage = (props) => {
  return (
    <div>
      <h2>Edit an Expense</h2>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button type="button" onClick={(e) => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>
        Remove
      </button>
    </div>
  );
};
const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});
export default connect(mapStateToProps)(EditExpensePage);