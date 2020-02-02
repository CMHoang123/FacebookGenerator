import { combineReducers } from 'redux';
import snackbar from './snackbar';
import navigationChange from './navigationChange';
import syncPage from './syncPage';

export default combineReducers({
    snackbar, navigationChange, syncPage
})
