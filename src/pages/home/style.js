import styled from 'styled-components'

export const HomeWraper = styled.div`
  width:960px;
  overflow:hidden;
  margin:0 auto;
`
export const HomeLeft = styled.div`
  width:625px;
  margin-left:15px;
  margin-top:30px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width:240px;
  float:right;
`
export const TopickWraper =styled.div`
  padding:20px 0px 10px 0;
  overflow:hidden;
  margin-left:-10px;
  border-bottom:1px solid #dcdcdc;
`
export const TopickItem =styled.div`
  float:left;
  background:#f7f7f7;
  height:32px;
  margin-left:10px;
  margin-bottom:10px;
  line-height:32px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  padding-right:10px;
  border-radius:4px;
  .top-pic{
    margin-right:10px;
    display:block;
    float:left;
    width:32px;
    height:32px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    font-size: size 13px;
    line-height:18px;
    color:#999;
  }
`
export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .list-pick{
    width:125px;
    height:100px;
    display:block;
    float:right;
  }
`

