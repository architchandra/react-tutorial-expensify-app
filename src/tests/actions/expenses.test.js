import { addExpense, editExpense, removeExpense } from '../../actions/expenses';



test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('abc', {
    description: 'Yello',
    amount: '2',
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'abc',
    updates: {
      description: 'Yello',
      amount: '2',
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Something',
    note: 'Extra note',
    amount: 100,
    createdAt: 0,
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with nothing provided', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
    },
  });
});
