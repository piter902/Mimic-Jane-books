
import  * as types from './actiontypes';
export const changehome = (data)=>{
  console.log(data)
  return {
    type:types.CHNAGE_HOME,
    data:data
  }
}