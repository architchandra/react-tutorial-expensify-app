import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'



let testExpense, editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;
beforeEach(() => {
  testExpense = expenses[0];
  editExpenseSpy = jest.fn();
  startRemoveExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[0]}
      editExpense={editExpenseSpy}
      startRemoveExpense={startRemoveExpenseSpy}
      history={historySpy}
    />
  );
});


test('should render Edit Expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should edit expense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(testExpense);
  expect(editExpenseSpy).toHaveBeenLastCalledWith(testExpense.id, testExpense);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
});

test('should remove expense correctly', () => {
  const testExpenseId = expenses[0].id;
  wrapper.find('button').simulate('click');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith(testExpenseId);
});
