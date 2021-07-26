import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const ExpenseDashboardPage = () => (
  <h2>Expense Dashboard Page</h2>
);

const AddExpensePage = () => (
  <h2>Add an Expense</h2>
);

const EditExpensePage = () => (
  <h2>Edit an Expense</h2>
);

const HelpPage = () => (
  <h2>Help</h2>
);

const NotFoundPage = () => (
  <div>
    <h2>Page not found</h2>
    <p>Go to - <Link to="/">Home Page</Link></p>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>
      <li>
        <Link to="/edit">Edit</Link>
      </li>
      <li>
        <Link to="/help">Help</Link>
      </li>
    </ul>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ ExpenseDashboardPage } exact={ true } />
        <Route path="/create" component={ AddExpensePage } />
        <Route path="/edit" component={ EditExpensePage } />
        <Route path="/help" component={ HelpPage } />
        <Route component={ NotFoundPage } />
      </Switch>
    </div>
  </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('app'));