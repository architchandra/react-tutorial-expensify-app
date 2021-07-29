import { createStore, combineReducers } from 'redux';



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