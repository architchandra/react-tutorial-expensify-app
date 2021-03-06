import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please fill up the description and amount fields!' }));
    } else {
      if(this.state.error !== '') {
        this.setState(() => ({ error: '' }));
      }

      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: (this.state.createdAt).valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          value={this.state.description}
          placeholder="Description"
          onChange={this.onDescriptionChange}
          autoFocus
        />
        <input
          className="text-input"
          type="text"
          value={this.state.amount}
          placeholder="0.00"
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          value={this.state.note}
          placeholder="Note"
          onChange={this.onNoteChange}
          rows="4"
        ></textarea>
        <div>
          <input className="button" type="submit" value="Save Expense" />
        </div>
      </form>
    );
  }
}
export default ExpenseForm;
