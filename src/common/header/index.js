import React, { Component } from 'react';
// css动画组件
import { CSSTransition } from 'react-transition-group'
// redux连接方法
import { connect } from 'react-redux'
// 样式组件
import {
  HeaderWraper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addtion,
  Button,
  SearchWraper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem
} from './style'
import { actionCreators } from './store'
class Header extends Component {
  getList() {
    const { focused, list, page, mouseIn, totalpage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const pageList = []
    const newList = list.toJS()
    if (newList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}>
          <SearchInfoTitle>热门搜索</SearchInfoTitle>
          <SearchInfoSwitch onClick={() => { handleChangePage(page, totalpage, this.spin) }}>
            <span className="iconfont spin" ref={icon => this.spin = icon}>&#xe851;</span>换一批
        </SearchInfoSwitch>
          <div>
            {pageList}
          </div>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleFocus, handleBlur, list } = this.props
    return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWraper>
            <CSSTransition
              timeout={200}
              in={focused}
              className="slide"
            >
              <NavSearch
                onFocus={() => handleFocus(list)}
                onBlur={handleBlur}
                className={focused ? 'focused' : ''}>
              </NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe613;</span>
            {this.getList(focused)}
          </SearchWraper>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <NavItem className="right">登录</NavItem>
        </Nav>
        <Addtion>
          <Button className="writing">
            <span className="iconfont">&#xe604;</span>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addtion>
      </HeaderWraper>
    )
  }
}
// 获取redux的state
const mapStateToProps = (state) => {
  return {
    // focused:state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalpage: state.getIn(['header', 'totalpage']),
  }
}
// 提交状态、
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus: (list) => {
      console.log(list)
      list.size === 0 && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    handleBlur: () => {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter: () => {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave: () => {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage: (page, totalpage, spin) => {
      console.log(spin)
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page >= totalpage) {
        page = 1
      } else {
        page++
      }
      dispatch(actionCreators.changepage(page))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);