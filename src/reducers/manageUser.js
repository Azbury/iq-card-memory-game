export default function manageUsers(state = {
  currentUser: '',
  userTopIqs: '',
  iq: 100,
  userSubmitted: false,
  showUser: false,
  submitScore: false,
  flippedCards: [],
  currentCards: [],
  gameStarted: false
}, action) {
  switch (action.type) {

    case 'ADD_USER':

      return {
        ...state,
        currentUser: action.user,
        userSubmitted: true,
        showUser: true
      }
    
    case 'NEW_USER_BUTTON':

      return {
        ...state,
        currentUser: '',
        currentCards: [],
        userSubmitted: false,
        gameStarted: false
      }
    
    case 'IS_MATCH':

      let theCards = []
      let cardsLeftOnField = state.currentCards
      let newIQ = state.iq
      let updateSubmit = state.submitted
      if (state.flippedCards.length === 1 && state.flippedCards[0] === action.imageid) {
        theCards = []
        cardsLeftOnField = cardsLeftOnField.map(e => e.name === action.imageid ? {name: "", flipped: true, id: e.id} : e)
        newIQ = state.iq + 10
      } else if ((state.flippedCards.length === 1 && state.flippedCards[0] !== action.imageid) || (state.flippedCards.length === 2)) {
        theCards = []
        newIQ = state.iq - 10
        cardsLeftOnField = cardsLeftOnField.map(e => e.name === state.flippedCards[0] || e.name === action.imageid ? {name: e.name, flipped: false, id: e.id} : {name: e.name, flipped: e.flipped, id: e.id})
      } else {
        theCards = [...state.flippedCards, action.imageid]
      }

      return {
        ...state,
        iq: newIQ,
        submitted: updateSubmit,
        flippedCards: theCards,
        currentCards: cardsLeftOnField
      }

    case 'ADD_CARDS':

      return {
        ...state,
        currentCards: action.cards,
        submitted: false,
        gameStarted: true
      }

    case 'FLIP_CARDS':

      return {
        ...state,
        currentCards: state.currentCards.map(e => {return {name: e.name, flipped: false, id: e.id}}),
        submitScore: true
      }
    
    case 'FLIP_CARD':
      
      return {
        ...state,
        currentCards: state.currentCards.map(e => e.id === action.animal ? {name: e.name, flipped: !e.flipped, id: e.id} : {name: e.name, flipped: e.flipped, id: e.id})
      }
    
    case 'CHECKING_TOP_IQS':

      return {
        ...state,
        userTopIqs: action.user.iqs
      }

    default:
      return state;

  }
};