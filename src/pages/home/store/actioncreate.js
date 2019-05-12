
import  * as types from './actiontypes';
import axios from 'axios'
// import { fromJS } from 'immutable'
export const changehome = ()=>{
  return (dispatch)=> {
    axios.get('/server/home.json').then(res=>{
      const {data} =res.data
      console.log(data)
      dispatch(getHomeDate(data))
    })
  }
}
const getHomeDate=(data,page)=>{
  return {
    type:types.CHNAGE_HOME,
    data:data,
    
  }
}
const getMoreListData=(data,page)=>{
  return {
      type:types.GET_MORE_LIST,
      list:data,
      nextpage:page
    }
}
export const getMoreList =(page)=>{
  return (dispatch)=>{
    axios.get('/server/homelist.json?page='+page).then(res=>{
      const {data} =res.data
      console.log({data})
      dispatch(getMoreListData(data,page+1))
    })
  }
}
export const changeBackTop = (show)=>{
  return {
    type:types.CHNAGE_BACK_SHOW,
    show
  }
}