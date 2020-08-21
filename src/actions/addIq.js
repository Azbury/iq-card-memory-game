export function addIq(iq, user_id) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_IQ_REQUEST' })
      console.log(user_id)
      let formData = {
        "iq": iq,
        "user_id": user_id
      }
      let configObj = {
        method: "Post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(formData)
      }
      console.log(formData)
      console.log(configObj)
      console.log(user_id)
      fetch('http://localhost:3000/iqs', configObj)
        .then(response => response.json())
        .then(score => dispatch({ type: 'ADD_SCORE', score }))
    };
  }