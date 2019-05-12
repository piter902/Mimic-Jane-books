import React ,{PureComponent} from 'react';
import {RecomandWraper,RecomandItem} from '../style'
import {connect} from 'react-redux'
class Recomand extends PureComponent{
  render (){
    const {list} =this.props
    return (
      <RecomandWraper>
        {
          list.map(item=>{
            return (
              <RecomandItem key={item.get('id')} imgurl={item.get('imgUrl')}></RecomandItem>
            )
          })
        }
      </RecomandWraper>
    )
  }
}
const mapStateToProps = (state)=>{
  return {
    list:state.get('home').get('recomandlist')
  }
}
export default connect(mapStateToProps,null)(Recomand)