import {combineReducers} from 'redux-immutable'
import {reducer as headerreducer} from '../common/header/store'
import {reducer as homereducer} from '../pages/home/store'
export default combineReducers({
  header:headerreducer,
  home:homereducer
})