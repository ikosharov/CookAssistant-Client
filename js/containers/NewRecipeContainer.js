import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import NewRecipe from '../components/NewRecipe'
import * as actions from '../actions'
import * as api from '../data/api'

const mapStateToProps = (state) => {
	return {
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createRecipe: (recipe) => {
			let promise = new Promise((resolve, reject) => {
				api.addRecipe(recipe)
					.then((json) => {
						// success
						resolve(json)
					}).catch(() => {
						// some error
						reject()
					})
			})
			return promise
		},
		navigateToEdit: (recipeId) => {
			dispatch(push(`/Recipes/${recipeId}/Edit`))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe)