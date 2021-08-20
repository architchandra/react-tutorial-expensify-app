import React from 'react';



class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if(amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.description}
            placeholder="Description"
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input
            type="text"
            value={this.state.amount}
            placeholder="0.00"
            onChange={this.onAmountChange}
          />
          <textarea
            value={this.state.note}
            placeholder="Note"
            onChange={this.onNoteChange}
            rows="4"
          ></textarea>
        </form>
      </div>
    );
  }
}
export default ExpenseForm;