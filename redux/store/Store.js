import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducers/raeducer';
// This variable unites all Reducers into one place
rootReducer = combineReducers({deAsa: reducer});
// This is the Store called by the provider
export const store = createStore(rootReducer, applyMiddleware(thunk));
