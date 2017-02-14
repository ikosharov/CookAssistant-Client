import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RecipesList from '../components/RecipesList';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		navigateToAddRecipe: () => {
			dispatch(push(`/Recipes/new`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList);