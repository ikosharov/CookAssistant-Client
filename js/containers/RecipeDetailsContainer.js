import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RecipeDetails from '../components/RecipeDetails';
import * as actions from '../actions';
import * as api from '../data/api';
import * as constants from '../constants';

const mapStateToProps = (state) => {
	return {
		recipeDetails: state.recipeDetails
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadRecipeDetails: (recipeId, recipeType) => {
			api.loadRecipeDetails(recipeId, recipeType)
				.then((recipeDetails) => {
					dispatch(actions.loadRecipeDetailsSuccess(recipeDetails));
				}).catch(() => {
					// some error
				});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);