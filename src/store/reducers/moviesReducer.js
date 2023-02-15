
export const moviesReducer = (state = [], action) => {
  console.log('ACTION: ', action)

  switch (action.type) {
    case '@movies/get': {
      return action.payload
    }
    default:
      return state
  }
}

export const messageReducer = (state = {}, action) => {
  console.log('ACTION: ', action)

  switch (action.type) {
    case '@movie/add': {
      return action.payload
    }
    case '@movie/edit': {
      return action.payload
    }
    case '@movie/delete': {
      return action.payload
    }
    default:
      return state
  }
}