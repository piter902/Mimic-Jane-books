import {combineReducers} from 'redux-immutable'
import {reducer as headerreducer} from '../common/header/store'
export default combineReducers({
  header:headerreducer
})