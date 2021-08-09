import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const expenses = getExpenses(state.expenses, state.filters);
  console.log(expenses);
});

store.dispatch(addExpense({ description: 'Electricity bill', amount: 1500 }));
store.dispatch(addExpense({ description: 'Broadband bill', amount: 943 }));
store.dispatch(addExpense({ description: 'Maid\'s salary', amount: 8000 }));
store.dispatch(setTextFilter('bill'));



ReactDOM.render(<AppRouter />, document.getElementById('app'));