export function addUser() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_USER_REQUEST' })
      let formData = {
        "username": userData.username.value
      }
      let configObj = {
        method: "Post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(formData)
      }
      fetch('http://localhost:3000/users', configObj)
        .then(response => response.json())
        .then(user => dispatch({ type: 'ADD_USER', user }))
    };
  }