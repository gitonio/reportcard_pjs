import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, promise,  reduxImmutableStateInvariant()))
  );
}
