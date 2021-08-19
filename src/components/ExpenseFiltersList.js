import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';



const ExpenseFiltersList = (props) => (
  <div>
    <input
      type="text"
      value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        const sortByValue = e.target.value;

        if(sortByValue === 'date') {
          props.dispatch(sortByDate());  
        } else if(sortByValue === 'amount') {
          props.dispatch(sortByAmount());
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);
const mapStateToProps = (state) => ({
  filters: state.filters,
});
export default connect(mapStateToProps)(ExpenseFiltersList);