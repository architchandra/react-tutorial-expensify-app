import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';



test('should render Add Expense page', () => {
  const onSubmitSpy = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={history} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const onSubmitSpy = jest.fn();
  const historySpy = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmitSpy} history={historySpy} />);
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0]);
});
