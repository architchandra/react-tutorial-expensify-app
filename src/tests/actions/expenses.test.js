import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { get, set, ref } from 'firebase/database';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';



const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  set(ref(database, 'expenses'), expensesData).then(() => {
    done();
  });
});



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
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData,
      },
    });

    return get(ref(database, `expenses/${actions[0].expense.id}`));
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDataDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDataDefaults,
      },
    });

    return get(ref(database, `expenses/${actions[0].expense.id}`));
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDataDefaults);
    done();
  });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

test('should fetch expenses from Firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses,
    });

    done();
  });
});
