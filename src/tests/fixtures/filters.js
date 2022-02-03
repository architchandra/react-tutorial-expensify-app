import moment from 'moment';



const emptyFilters = {
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined,
};
const filters = {
  text: 'maid',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days'),
};
export { emptyFilters, filters };
