import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import NewRecipe from '../components/NewRecipe';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		create: (recipe) => {
			let promise = new Promise((resolve, reject) => {
			api.addRecipe(recipe)
				.then(() => {
					// success
					resolve();
				}).catch(() => {
					// some error
					reject();
				});
			});
			return promise;
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRecipe);