import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import RecipesLists from '../components/RecipesLists'
import * as actions from '../actions'
import * as api from '../data/api'

const mapStateToProps = (state) => {
	return {
		currentUserRecipes: state.currentUserRecipes,
		anyUserRecipes: state.anyUserRecipes,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipes: () => {
			dispatch(actions.fetchStarted())
			api.loadCurrentUserRecipes()
				.then((recipes) => {
					dispatch(actions.fetchFinished())
					dispatch(actions.loadCurrentUserRecipesSuccess(recipes))
				}).catch(() => {
					// some error
				})
			dispatch(actions.fetchStarted())
			api.loadAnyUserRecipes()
				.then((recipes) => {
					dispatch(actions.fetchFinished())
					dispatch(actions.loadAnyUserRecipesSuccess(recipes))
				}).catch(() => {
					// some error
				})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesLists)