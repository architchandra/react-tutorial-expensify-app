import uuid from 'uuid';
import { ref, push, get, remove, update } from 'firebase/database';
import database from '../firebase/firebase';



const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});
const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {
      description,
      note,
      amount,
      createdAt,
    };

    return push(ref(database, 'expenses'), expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense,
      }));
    });
  };
};

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});
const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(database, `expenses/${id}`)).then((ref) => {
      dispatch(removeExpense({ id }));
    });
  };
};

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return update(ref(database, `expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

const setExpenses = (expenses = []) => ({
  type: 'SET_EXPENSES',
  expenses,
});
const startSetExpenses = () => {
  return (dispatch) => {
    const expenses = [];

    return get(ref(database, 'expenses')).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
      dispatch(setExpenses(expenses));
    });
  };
};



export { startAddExpense, addExpense, startRemoveExpense, removeExpense, startEditExpense, editExpense, startSetExpenses, setExpenses };
