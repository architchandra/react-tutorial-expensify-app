import { createStore, combineReducers } from 'redux';



const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  stateDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);



const demoState = {
  expenses: [{
    id: 'jnjkdscnjdnv',
    description: 'Jan rent',
    note: 'Added to rent ledger',
    amount: 31000,
    createdAt: 0,
  }],
  filters: {
    text: 'rebt',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};