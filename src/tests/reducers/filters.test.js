import moment from 'moment';
import filtersReducer from '../../reducers/filters';



const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};



test('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual(filtersReducerDefaultState);
});

test('should set text filter', () => {
  const action = { 
    type: 'SET_TEXT_FILTER',
    filterText: 'pizza',
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('pizza');
});

test('should set start date filter', () => {
  const action = { 
    type: 'SET_START_DATE',
    startDate: 100,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(100);
});

test('should set end date filter', () => {
  const action = { 
    type: 'SET_END_DATE',
    endDate: 200,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(200);
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    ...filtersReducerDefaultState,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});
