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
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense,
      ];

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return ({
            ...expense,
            ...action.updates,
          });
        }
        else {
          return expense;
        }
      });

      case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
};



const setTextFilter = (filterText = '') => ({
  type: 'SET_TEXT_FILTER',
  filterText,
});
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return ({
        ...state,
        text: action.filterText,
      });

    case 'SET_START_DATE':
      return ({
        ...state,
        startDate: action.startDate,
      });

    case 'SET_END_DATE':
      return ({
        ...state,
        endDate: action.endDate,
      });

    case 'SORT_BY_AMOUNT':
      return ({
        ...state,
        sortBy: 'amount',
      });

    case 'SORT_BY_DATE':
      return ({
        ...state,
        sortBy: 'date',
      });

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
// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 15000 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


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