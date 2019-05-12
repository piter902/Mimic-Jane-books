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
  width:280px;
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
export const RecomandWraper = styled.div`
  margin:30px 0;
  width:280px;
`
export const RecomandItem = styled.div`
  height:50px;
  background:url(${props=>props.imgurl});
  background-size:contain;
  width:280px;
  margin-bottom:6px;
`
export const WriterWraper = styled.div`
  width:278px;
  border:1px solid #dcdcdc;
  height:300px;
  line-height:300px;
  text-align:center;
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  margin:30px 0;
  cursor: pointer;
  background:#a5a5a5;
  text-align:center;
  border-radius:20px;
  color:#fff;
`

