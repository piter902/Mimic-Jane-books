import * as types from './actionTypes'
import { fromJS } from 'immutable'
const defaultState =fromJS({
  focused:false,
  list:[],
  page:1,
  totalpage:1,
  mouseIn:false 
})
export default (state=defaultState,action)=>{
  switch (action.type){
    case types.SEARCH_FOCUS:
      return state.set('focused',true)
    case types.SEARCH_BLUR:
      return state.set('focused',false)
    case types.GET_LIST:
      return state.set('list',action.data).set('totalpage',action.totalpage)
    case types.MOUSE_ENTER:
      return state.set('mouseIn',true)
    case types.MOUSE_LEAVE:
      return state.set('mouseIn',false)
    case types.CHANGE_PAGE:
      return state.set('page',action.page)
    default :
      return state
  }
}