import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from '../reducers/raeducer';
rootReducer = combineReducers({deAsa: reducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
