import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';



export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = (e) => {
    this.props.removeExpense(this.props.expense.id);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Edit an Expense</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button type="button" onClick={this.onClick}>
          Remove
        </button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
});
const mapDisptachToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense({ id })),
});
export default connect(mapStateToProps, mapDisptachToProps)(EditExpensePage);
