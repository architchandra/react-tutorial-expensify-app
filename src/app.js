import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashboardPage = () => (
  <h1>Expense Dashboard Page</h1>
);

const AddExpensePage = () => (
  <h1>Add an Expense</h1>
);

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
      <Route path="/create" component={ AddExpensePage } exact={ true } />
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));