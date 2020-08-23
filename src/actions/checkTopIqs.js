export function checkTopIqs(user_id) {
    return (dispatch) => {
      dispatch({ type: 'START_CHECKING_TOP_IQS_REQUEST' });
      fetch(`http://localhost:3000/users/${user_id}`)
        .then(response => response.json())
        .then(newIqs => dispatch({ type: 'CHECKING_TOP_IQS', newIqs }));
    }
}