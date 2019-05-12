import React ,{Component} from 'react';
import {
  HomeWraper,
  HomeLeft,
  HomeRight
} from './style'
import {actioncreate} from './store'
import {connect} from 'react-redux'
import List from './component/list'
import Writer from './component/writer'
import Recomand from './component/recomand'
import Topick from './component/topick'
import{BackTop} from './style'
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
        {
          this.props.backShow ? <BackTop onClick={this.handletop}>顶部</BackTop>:null
        }
      </HomeWraper>
    )
  }
  handletop() {
		window.scrollTo(0, 0);
	}
  componentDidMount(){
    this.props.changehome()
    this.bindEvent()
  }
  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeBackTop);
	}
  bindEvent(){
    window.addEventListener('scroll', this.props.changeBackTop);
  }
}
const mapStateToProps = (state)=>{
  return {
    backShow:state.get('home').get('backShow')
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changehome:()=>{
        dispatch(actioncreate.changehome())
    },
    changeBackTop:()=>{
      if(document.documentElement.scrollTop>200){
        dispatch(actioncreate.changeBackTop(true))
      }else{
        dispatch(actioncreate.changeBackTop(false))
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)