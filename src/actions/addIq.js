export function addIq(iq, user_id) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_IQ_REQUEST' })
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
      fetch('http://localhost:3000/iqs', configObj)
        .then(response => response.json())
        .then(score => dispatch({ type: 'ADD_IQ', score }))
    };
  }