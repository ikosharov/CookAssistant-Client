import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/Home';
import * as actions from '../actions';
import * as api from '../data/api';
import * as constants from '../constants';

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
		userId: state.auth.id,
		publicRecipes: state.publicRecipes,
		personalRecipes: state.personalRecipes,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => {
			dispatch(actions.signOut());
			dispatch(push('/SignIn'));
		},
		loadRecipes: () => {
			dispatch(actions.fetchStarted());
			api.loadRecipes(constants.recipeTypes.PERSONAL)
				.then((recipes) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadPersonalRecipesSuccess(recipes));
				}).catch(() => {
					// some error
				});
			dispatch(actions.fetchStarted());
			api.loadRecipes(constants.recipeTypes.PUBLIC)
				.then((recipes) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadPublicRecipesSuccess(recipes));
				}).catch(() => {
					// some error
				});
		},
		cookRecipe: (recipe) => {
			let recipeType = (recipe.isPublic) ? "public" : "personal";
			let recipeId = recipe._id;
			dispatch(push(`Recipes/Cook/${recipeType}/${recipeId}`));
		},
		editRecipe: (recipe) => {
			let recipeType = (recipe.isPublic) ? "public" : "personal";
			let recipeId = recipe._id;
			dispatch(push(`Recipes/Edit/${recipeType}/${recipeId}`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);