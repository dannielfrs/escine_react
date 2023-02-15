
const initState = {
  message: {
    content: "",
    type: ""
  },
  user: {},
  isLoggedin: false
}

export const userReducer = (state = initState, action) => {
  console.log('ACTION: ', action)

  switch (action.type) {
    case '@user/user': {
      return action.payload
    }
    default:
      return state
  }
}