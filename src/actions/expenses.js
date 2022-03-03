import uuid from 'uuid';
import { ref, push } from 'firebase/database';
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
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});



export { startAddExpense, addExpense, removeExpense, editExpense };
