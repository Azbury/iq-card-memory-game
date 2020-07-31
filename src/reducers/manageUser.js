import {v1 as uuid} from "uuid"; 

export default function manageUsers(state = {
  users: [],
  currentUser: '',
  submitted: false,
  flippedCards: []
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

      let theCards = []

      if (state.flippedCards.length === 2) {
        theCards = []
      } else {
        theCards = [...state.flippedCards, action.imageid]
      }

      return {
        ...state,
        users: [...state.users],
        currentUser: state.currentUser,
        submitted: state.submitted,
        flippedCards: theCards
      }

    default:
      return state;

  }
};