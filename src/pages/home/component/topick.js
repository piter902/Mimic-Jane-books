import React ,{Component} from 'react';
import {TopickWraper,TopickItem} from '../style'
class Topick extends Component{
  render (){
    return (
      <TopickWraper>
        <TopickItem>
          <img src="//static.ppdaicdn.com/dist/img/logo.224b397.png" className="top-pic"/>
          社会热点
        </TopickItem>
      </TopickWraper>
    )
  }
}
export default Topick