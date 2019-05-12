import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'
export const HeaderWraper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
`

export const Logo =styled.div`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${LogoPic});
  background-size:contain;
`
export const Nav =styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  /* background:green; */
  margin:0 auto;
`
export const NavItem =styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SearchWraper =styled.div`
  float:left;
  position:relative;
  .zoom{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`
export const SearchInfo = styled.div`
  position:absolute;
  top:56px;
  left:0;
  width:220px;
  padding:0 20px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
  background:#fff;
  color:#777;
`
export const SearchInfoTitle = styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696;
  
`
export const SearchInfoSwitch = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  line-height: 20px;
  font-size:13px;
  cursor: pointer;
  .spin{
    font-size:12px;
    margin-right:2px; 
    transition: all .2s ease-in;
		transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  line-height:20px;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:2px;
  margin-right:10px;
  margin-bottom:15px;
`
export const NavSearch =styled.input.attrs({
  placeholder:'搜索内容'
})`
  width:160px;
  height:38px;
  padding:0 30px 0 20px;
  margin-top:9px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  margin-left:20px;
  &.slide.enter{
    transition:all .2s ease-out;
  }
  &.slide.enter-active{
    width:220px;
  }
  &.slide.enter-done{
    width:220px;
  }
  &.slide.exit{
    transition:all .2s ease-out;
  }
  &.slide.exit-active{
    width:160px;
  }
  &.slide.exit-done{
    width:160px;
  }
  &::placeholder{
    color:#999;
  }
  /* &.focused{
    width:220px;
  } */
`
export const Addtion =styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button =styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  border:1px solid #ec6149;
  margin-right:20px;
  padding:0 20px;
  font-size:14px;
  &.reg{
    color:#ec6149;
  }
  &.writing{
    color:#fff;
    background:#ec6149;
  }
`