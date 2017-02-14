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
		loadRecipeDetails: (id) => {
			dispatch(actions.fetchStarted());
			api.loadRecipeDetails(id)
				.then((recipeDetails) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadRecipeDetailsSuccess(recipeDetails));
				}).catch(() => {
					// some error
				});
		},
		navigateToEdit: (id) => {
			dispatch(push(`/Recipes/${id}/Edit`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CookRecipe);