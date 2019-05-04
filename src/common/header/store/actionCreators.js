import * as types from './actionTypes'
import axios from 'axios'
import {fromJS} from 'immutable'
const changelist=(data)=>({
  type:types.GET_LIST,
  data:fromJS(data),
  totalpage:Math.ceil(data.length/10)
})
export const searchFocus = ()=>({
  type:types.SEARCH_FOCUS
})
export const searchBlur = ()=>({
  type:types.SEARCH_BLUR
})
export const mouseEnter = ()=>({
  type:types.MOUSE_ENTER
})
export const mouseLeave = ()=>({
  type:types.MOUSE_LEAVE
})
export const changepage = (page)=>({
  type:types.CHANGE_PAGE,
  page:page
})

export const getList = ()=>{
  return (dispatch) => {
    axios.get('/server/headerlist.json').then(res=>{
      dispatch(changelist(res.data.data))
    }).catch(err=>{
      console.log({err})
    })
  }
}