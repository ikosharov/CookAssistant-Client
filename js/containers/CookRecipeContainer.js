import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CookRecipe from '../components/CookRecipe';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		recipeDetails: state.recipeDetails,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipeDetails: (recipeId) => {
			dispatch(actions.fetchStarted());
			api.loadRecipeDetails(recipeId)
				.then((recipeDetails) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadRecipeDetailsSuccess(recipeDetails));
				}).catch(() => {
					// some error
				});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CookRecipe);