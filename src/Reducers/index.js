import { combineReducers } from 'redux';
import appState from './reducer_appState';

const rootReducer = combineReducers({
    appState
});

export default rootReducer;