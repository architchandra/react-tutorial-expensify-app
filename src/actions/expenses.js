import uuid from 'uuid';
import { ref, push, get, remove, update } from 'firebase/database';
import { database } from '../firebase/firebase';



const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense,
});
const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
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

    return push(ref(database, `users/${uid}/expenses`), expense).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return remove(ref(database, `users/${uid}/expenses/${id}`)).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    return update(ref(database, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

const setExpenses = (expenses = []) => ({
  type: 'SET_EXPENSES',
  expenses,
});
const startSetExpenses = () => {
  return (dispatch, getState) => {
    const expenses = [];
    const uid = getState().auth.uid;

    return get(ref(database, `users/${uid}/expenses`)).then((snapshot) => {
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
