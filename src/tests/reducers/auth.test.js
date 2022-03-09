import authReducer from '../../reducers/auth';



test('should set uid for login', () => {
  const uid = 'abc';
  const action = {
    type: 'LOGIN',
    uid,
  };

  expect(authReducer({}, action)).toEqual({ uid });
});

test('should clear uid for logout', () => {
  const action = {
    type: 'LOGOUT',
  };

  expect(authReducer({}, action)).toEqual({});
});
