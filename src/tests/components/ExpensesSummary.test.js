import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';



let wrapper;
beforeEach(() => {
  wrapper = shallow(
    <ExpensesSummary
      expenses={expenses}
    />
  );
});



test('should NOT render if no expenses present', () => {
  wrapper.setProps({ expenses: [] });
  expect(wrapper).toMatchSnapshot();
});

test('should render singular copy when ONLY one expense present', () => {
  wrapper.setProps({ expenses: [expenses[0]] });
  expect(wrapper).toMatchSnapshot();
});

test('should render plural copy when multiple expenses present', () => {
  expect(wrapper).toMatchSnapshot();
});


