import { login, logout } from '../../actions/auth';



test('should create login action object', () => {
  const uid = 'abc';

  expect(login(uid)).toEqual({
    type: 'LOGIN',
    uid,
  });
});

test('should create logout action object', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT',
  });
});
