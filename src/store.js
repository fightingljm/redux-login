import thunk from 'redux-thunk';
import {authReducer} from './reducer';
import { createStore,applyMiddleware,compose } from 'redux';

let defaultState = {
  isAuthenticated:false,
  currentUser:'null'
}

const store = createStore(authReducer,defaultState,compose(applyMiddleware(thunk)))

export default store;
