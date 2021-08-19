const setTextFilter = (filterText = '') => ({
  type: 'SET_TEXT_FILTER',
  filterText,
});
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});



export { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate };