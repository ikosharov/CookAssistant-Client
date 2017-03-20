import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import EditStep from '../components/EditStep';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		recipeDetails: state.recipeDetails,
		isFetching: state.isSubFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		edit: (recipeId, step) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.editStep(recipeId, step)
					.then((step) => {
						// success
						resolve(step);
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		},
		create: (recipeId, step) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.createStep(recipeId, step)
					.then((step) => {
						// success
						resolve(step);
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		},
		delete: (recipeId, stepId) => {
			dispatch(actions.subFetchStarted());
			let promise = new Promise((resolve, reject) => {
				api.deleteStep(recipeId, stepId)
					.then(() => {
						// success
						resolve();
						dispatch(actions.subFetchFinished());
					}).catch(() => {
						// some error
						reject();
						dispatch(actions.subFetchFinished());
					});
			});
			return promise;
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(EditStep);