import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';



test('should set up default expenses reducer state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should NOT remove expense if id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add a new expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: 4,
      description: 'Laptop repair',
      note: 'From Lajpat Nagar',
      amount: 1200,
      createdAt: moment(0).add(6, 'days').valueOf(),
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    action.expense,
  ]);
});

test('should edit an existing expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      description: 'Order momo pizza',
      amount: 300,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    {
      ...expenses[0],
      ...action.updates,
    },
    expenses[1],
    expenses[2],
  ]);
});

test('should NOT edit an expense if id is not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 'yu',
    updates: {
      description: 'Order cheese burst pizza',
      amount: 302,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const prevState = [{
    id: 4,
    description: 'Laptop repair',
    note: 'From Lajpat Nagar',
    amount: 1200,
    createdAt: moment(0).add(6, 'days').valueOf(),
  }];
  const action = {
    type: 'SET_EXPENSES',
    expenses,
  };
  const state = expensesReducer(prevState, action);

  expect(state).toEqual(expenses);
});
