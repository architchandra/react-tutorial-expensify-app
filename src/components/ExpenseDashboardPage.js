import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFiltersList from './ExpenseFiltersList';



const ExpenseDashboardPage = () => (
  <div>
    <h2>Expense Dashboard Page</h2>
    <ExpenseFiltersList />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;