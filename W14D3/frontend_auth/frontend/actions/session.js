import * as SessionAPI from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const lougoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

export const createNewUser = userForm => dispatch => (
  SessionAPI.postUser(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = userForm => dispatch => (
  SessionAPI.postSession(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionAPI.deleteSession()
    .then(() => dispatch(lougoutCurrentUser()))
)