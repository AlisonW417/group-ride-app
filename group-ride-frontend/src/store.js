import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import signupForm from './reducers/signupForm';
import loginForm from './reducers/loginForm';
import currentUser from './reducers/user';
import rideForm from './reducers/rideForm'
import thunk from 'redux-thunk';

const reducer = combineReducers({
    signupForm,
    loginForm,
    currentUser,
    rideForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;