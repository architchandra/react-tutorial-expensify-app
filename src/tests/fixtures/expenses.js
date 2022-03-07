import moment from 'moment';



const expenses = [{
  id: '1',
  description: 'Order pizza',
  note: '',
  amount: 195,
  createdAt: 0,
},{
  id: '2',
  description: 'Order from Pizza Hut',
  note: '',
  amount: 295,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
},{
  id: '3',
  description: 'Pay phone bill',
  note: '',
  amount: 30,
  createdAt: moment(0).add(4, 'days').valueOf(),
}];
export default expenses;
