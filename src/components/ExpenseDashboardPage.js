import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFiltersList from './ExpenseFiltersList';
import ExpensesSummary from './ExpensesSummary';



const ExpenseDashboardPage = () => (
  <div>
    <h2>Expense Dashboard Page</h2>
    <ExpensesSummary />
    <ExpenseFiltersList />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
