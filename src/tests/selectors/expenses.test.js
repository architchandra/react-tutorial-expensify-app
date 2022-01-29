import moment from 'moment';
import getExpenses from '../../selectors/expenses';



const expenses = [{
  id: 1,
  description: 'Order pizza',
  note: '',
  amount: 195,
  createdAt: 0,
},{
  id: 2,
  description: 'Order from Pizza Hut',
  note: '',
  amount: 295,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
},{
  id: 3,
  description: 'Pay phone bill',
  note: '',
  amount: 30,
  createdAt: moment(0).add(4, 'days').valueOf(),
}];



test('should filter expenses by text value', () => {
  const filters = {
    text: 'pizza',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter expenses by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test('should filter expenses by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort expenses by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('should sort expenses by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});
