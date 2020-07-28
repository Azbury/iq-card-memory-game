import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageUsers(state = {
  users: [],
}, action) {
  switch (action.type) {

    case 'ADD_USER':

      const user = { username: action.username };
      return {
        ...state,
        users: [ ...state.users, user]
      }

    default:
      return state;

  }
};