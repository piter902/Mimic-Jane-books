import React ,{Component} from 'react';
import {connect} from 'react-redux'
import {TopickWraper,TopickItem} from '../style'
class Topick extends Component{
  render (){
    const {list} =this.props
    return (
      <TopickWraper>
        {
          list.map(item=>{
            return (
              <TopickItem key={item.id}>
                <img src={item.get('imgUrl')} className="top-pic" alt=""/>
                {item.get('title')}
              </TopickItem>
            )
          })
        }
      </TopickWraper>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    list:state.get('home').get('toppiclist')
  }
}
export default connect(mapStateToProps,null)(Topick)