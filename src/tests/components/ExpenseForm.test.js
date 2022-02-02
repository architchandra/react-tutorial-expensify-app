import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';



test('should render expense form without data', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const newDescription = 'testa';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {
      value:  newDescription,
    },
  });
  expect(wrapper.state('description')).toBe('testa');
});

test('should set note on input change', () => {
  const newNote = 'new note';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: {
      value: newNote,
    },
  });
  expect(wrapper.state('note')).toBe(newNote);
});

test('should set amount on input change with valid data', () => {
  const newAmount = '21.23';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: newAmount,
    },
  });
  expect(wrapper.state('amount')).toBe(newAmount);
});

test('should set amount on input change with INVALID data', () => {
  const newAmount = '21.239';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: newAmount,
    },
  });
  expect(wrapper.state('amount')).toBe('');
});
