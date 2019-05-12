
import  * as types from './actiontypes';
import axios from 'axios'
export const changehome = ()=>{
  return (dispatch)=> {
    axios.get('/server/home.json').then(res=>{
      const {data} =res.data
      console.log(data)
      dispatch(getHomeDate(data))
    })
  }
}
const getHomeDate=(data)=>{
  return {
    type:types.CHNAGE_HOME,
    data:data
  }
}