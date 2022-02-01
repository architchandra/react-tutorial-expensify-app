import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import moment from 'moment';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';



const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const expenses = getExpenses(state.expenses, state.filters);
});

store.dispatch(addExpense({ description: 'Electricity bill', amount: 1500, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description: 'Broadband bill', amount: 943, createdAt: moment().valueOf() }));
store.dispatch(addExpense({ description: 'Maid\'s salary', amount: 8000, createdAt: moment().valueOf() }));



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
