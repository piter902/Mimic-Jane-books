// import * as types from './actionTypes'
import { fromJS } from 'immutable'
import * as types from './actiontypes'
const defaultState = fromJS({
	toppiclist: [],
	infoList: [],
	recomandlist:[],
	page:1,
	backShow:true
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case types.CHNAGE_HOME:
			return state.merge({
				toppiclist:fromJS(action.data.toppiclist),
				recomandlist:fromJS(action.data.recomandlist),
				infoList:fromJS(action.data.infoList)
			})
		case types.GET_MORE_LIST:
			return state.merge({
				infoList:state.get('infoList').concat(fromJS(action.list.infoList)),
				page:action.nextpage
			}) 
		case types.CHNAGE_BACK_SHOW :
			return state.set('backShow',action.show)
		default:
			return state
	}
}