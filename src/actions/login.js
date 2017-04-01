
export function login(username) {
  return dispatch => {
    console.log('login...action',username);
    dispatch({type:'LOGIN',username:username})
  }
}
