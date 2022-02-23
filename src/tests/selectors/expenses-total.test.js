import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';



test('should give zero total if no expenses', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expense = expenses[0];
  const result = getExpensesTotal([expense]);
  expect(result).toBe(expense.amount);
});

test('should correctly add up multiple expenses', () => {
  const result = getExpensesTotal(expenses);
  let expensesTotal = 0;

  for (let i = 0; i < expenses.length; i++) {
    expensesTotal = expensesTotal + expenses[i].amount;
  }

  expect(result).toBe(expensesTotal);
});
