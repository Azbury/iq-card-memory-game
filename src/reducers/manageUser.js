import {v1 as uuid} from "uuid"; 

export default function manageUsers(state = {
  users: [],
  currentUser: '',
  submitted: false,
  flippedCard: -1
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
    
    case 'IS_MATCH':
      let newCard = 0
      if (state.flippedCard === -1) {
        newCard = action.imageid
      } else if (state.flippedCard === action.imageid) {
        newCard = -2
      } else {
        newCard = -1
      }

      return {
        ...state,
        users: [...state.users],
        currentUser: state.currentUser,
        submitted: state.submitted,
        flippedCard: newCard
      }

    default:
      return state;

  }
};