
export function authReducer(state = [],action) {
  switch (action.type) {
    case 'LOGIN':
      console.log('LOGIN Reducer',action.username);
      return {isAuthenticated:true,currentUser:action.username}
    default:
      return state;
  }
}
