import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import signupForm from './reducers/signupForm'
import currentUser from './reducers/user'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    signupForm,
    currentUser
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;