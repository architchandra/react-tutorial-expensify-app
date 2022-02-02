import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';



let onSubmitSpy, historySpy, wrapper;
beforeEach(() => {
  onSubmitSpy = jest.fn();
  historySpy = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
});



test('should render Add Expense page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);
});
