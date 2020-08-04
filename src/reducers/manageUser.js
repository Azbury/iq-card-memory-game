import {v1 as uuid} from "uuid"; 

export default function manageUsers(state = {
  users: [],
  currentUser: '',
  submitted: false,
  flippedCards: [],
  removeCards: false,
  currentCards: [],
  gameStarted: false,
  shouldCardsBeFlipped: false
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
      let toBeRemoved = false
      let cardsLeftOnField = state.currentCards
      let newIQ = state.users[0]
      if (state.flippedCards.length === 1 && state.flippedCards[0] === action.imageid) {
        theCards = [...state.flippedCards, action.imageid]
        toBeRemoved = true
        cardsLeftOnField = cardsLeftOnField.filter(e => e !== action.imageid)
        newIQ.iq = state.users[0].iq + 10
      } else if (state.flippedCards.length === 2) {
        theCards = []
      } else {
        theCards = [...state.flippedCards, action.imageid]
      }

      return {
        ...state,
        users: [newIQ],
        currentUser: state.currentUser,
        submitted: state.submitted,
        flippedCards: theCards,
        removeCards: toBeRemoved,
        currentCards: cardsLeftOnField
      }

    case 'ADD_CARDS':

      return {
        ...state,
        currentCards: action.cards,
        gameStarted: true
      }

    case 'FLIP_CARDS':

      return {
        ...state,
        shouldCardsBeFlipped: action.frontSideUp
      }

    default:
      return state;

  }
};