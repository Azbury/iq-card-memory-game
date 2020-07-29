import {v1 as uuid} from "uuid"; 

export default function manageUsers(state = {
  users: [],
  currentUser: '',
  submitted: false
}, action) {
  switch (action.type) {

    case 'ADD_USER':

      const user = { username: action.username, iq: 100, id: uuid() };
      return {
        ...state,
        users: [ ...state.users, user],
        currentUser: user.id,
        submitted: true
      }
    
    case 'NEW_USER_BUTTON':

      return {
        ...state,
        users: [...state.users],
        currentUser: '',
        submitted: false
      }

    default:
      return state;

  }
};