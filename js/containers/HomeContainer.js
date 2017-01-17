import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/Home';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
		userId: state.auth.id,
		currentUserRecipes: state.currentUserRecipes,
		anyUserRecipes: state.anyUserRecipes,
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
			api.loadCurrentUserRecipes()
				.then((recipes) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadCurrentUserRecipesSuccess(recipes));
				}).catch(() => {
					// some error
				});
			dispatch(actions.fetchStarted());
			api.loadAnyUserRecipes()
				.then((recipes) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.loadAnyUserRecipesSuccess(recipes));
				}).catch(() => {
					// some error
				});
		},
		cookRecipe: (recipe) => {
			dispatch(push(`Recipes/${recipe._id}/Cook`));
		},
		editRecipe: (recipe) => {
			dispatch(push(`Recipes/${recipe._id}/Edit`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);