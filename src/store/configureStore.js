import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';



const configureStore = () => (
  createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    })
  )
);



export default configureStore;