const initialState = {
  loggedIn: false
}

const fbAuth = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state
    case 'LOGOUT':
      return state
    default:
      return state
  }
}

export default fbAuth
