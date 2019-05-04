import React ,{Component} from 'react';
import {
  HomeWraper,
  HomeLeft,
  HomeRight
} from './style'
import {actioncreate} from './store'
import {connect} from 'react-redux'
import axios from 'axios'
import List from './component/list'
import Writer from './component/writer'
import Recomand from './component/recomand'
import Topick from './component/topick'
class Home extends Component{
  render (){
    return (
      <HomeWraper>
        <HomeLeft>
          <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topick/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recomand/>
          <Writer/>
        </HomeRight>
      </HomeWraper>
    )
  }
  componentDidMount(){
    axios.get('/server/home.json').then(res=>{
      const {data} =res.data
      this.props.changehome(data)
      console.log({data})
    })
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changehome:(value)=>{
      dispatch(actioncreate.changehome(value))
    }
  }
}
export default connect(null,mapDispatchToProps)(Home)