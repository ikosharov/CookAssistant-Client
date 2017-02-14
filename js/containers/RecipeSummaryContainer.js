import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RecipeSummary from '../components/RecipeSummary';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		userId: state.auth.id,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		cookRecipe: (recipe) => {
			dispatch(push(`/Recipes/${recipe._id}/Cook`));
		},
		editRecipe: (recipe) => {
			dispatch(push(`/Recipes/${recipe._id}/Edit`));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSummary);