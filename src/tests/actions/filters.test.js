import moment from 'moment';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from "../../actions/filters";



test('should generate set start data action object', () => {
  const startDate = moment(0);
  const action = setStartDate(startDate);
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate,
  });
});

test('should generate set end data action object', () => {
  const endDate = moment(0);
  const action = setEndDate(endDate);
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate,
  });
});

test('should generate set text filter action object with value provided', () => {
  const filterText = 'hey'
  const action = setTextFilter(filterText);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filterText,
  });
});

test('should generate set text filter action object with value NOT provided', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filterText: '',
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
});
