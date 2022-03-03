import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { get, ref } from 'firebase/database';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../firebase/firebase';



const createMockStore = configureMockStore([thunk]);



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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 1500,
    note: 'This is good',
    createdAt: 1000,
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      id: expect.any(String),
      ...expenseData,
    });

    get(ref(database, `${actions[0]}.expense.id`)).then((snapshot) => {
      expect(snapshot.val().toEqual(expenseData));
      done();
    });
  });
});

test('should add expense with defaults to database and store', (
  
) => {});

// test('should setup add expense action object with nothing provided', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
