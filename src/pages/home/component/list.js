import React ,{Component} from 'react';
import {
  ListItem,
  ListInfo
} from '../style'
import {connect} from 'react-redux'
class List extends Component{
  render (){
    const {infolist} = this.props
    return (
      <div>
        {
          infolist.map(item=>{
            return (
              <ListItem key={item.get('id')}>
                <img className="list-pick" src={item.get('imgUrl')} alt=""/>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    infolist:state.get('home').get('infoList')
  }
}
export default connect(mapStateToProps,null)(List)