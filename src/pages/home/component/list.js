import React ,{Component} from 'react';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'
import {actioncreate} from '../store'
import {connect} from 'react-redux'
class List extends Component{
  render (){
    const {infolist} = this.props
    return (
      <div>
        {
          infolist.map((item,index)=>{
            return (
              <ListItem key={index}>
                <img className="list-pick" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={()=>this.props.getMoreList(this.props.page )}>加载更多</LoadMore>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    infolist:state.get('home').get('infoList'),
    page:state.get('home').get('page')
  }
}
const mapDispatchToProps = (dispatch)=>({
  getMoreList(page){
    dispatch(actioncreate.getMoreList(page))
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(List)