// import * as types from './actionTypes'
import { fromJS } from 'immutable'
import * as types from './actiontypes'
const defaultState = fromJS({
	toppiclist: [],
	infoList: [],
	recomandlist:[]
})
export default (state = defaultState, action) => {
	switch (action.type) {
		case types.CHNAGE_HOME:
		console.log(action)
		return state.merge({
			toppiclist:fromJS(action.data.toppiclist),
			recomandlist:fromJS(action.data.recomandlist),
			infoList:fromJS(action.data.infoList)
		})
		default:
			return state
	}
}