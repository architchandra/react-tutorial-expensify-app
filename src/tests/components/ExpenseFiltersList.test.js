import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseFiltersList } from '../../components/ExpenseFiltersList';
import { emptyFilters, filters } from '../fixtures/filters';



let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseFiltersList
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});



test('should render expense filters list correctly with empty data', () => {
  wrapper.setProps({ filters: emptyFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should render expense filters list correctly with filled data', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: {
      value: filters.text,
    },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(filters.text);
});

test('should sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'date',
    },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
  wrapper.find('select').simulate('change', {
    target: {
      value: 'amount',
    },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
  const testDates = {
    startDate: filters.startDate,
    endDate: filters.endDate,
  };
  wrapper.find('DateRangePicker').prop('onDatesChange')(testDates);
  expect(setStartDate).toHaveBeenLastCalledWith(testDates.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(testDates.endDate);
});

test('should handle focus change', () => {
  const testFocusValue = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(testFocusValue);
  expect(wrapper.state('calendarFocused')).toBe(testFocusValue);
});
