import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});



const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];

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

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addExpense({ description: 'Rent', amount: 15000 }));



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