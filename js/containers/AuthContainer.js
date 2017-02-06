import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Auth from '../components/Auth';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		authenticateFailed: state.auth.authenticateFailed,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signUp: (username, password) => {
			dispatch(actions.fetchStarted());

			api.signUp(username, password).
				then((json) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.authenticateSucceeded(username, json.token, json.id));
					dispatch(push('/App/Recipes'));
				}).
				catch(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.authenticateFailed());
				});

		},
		signIn: (username, password) => {
			dispatch(actions.fetchStarted());

			api.signIn(username, password).
				then((json) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.authenticateSucceeded(username, json.token, json.id));
					dispatch(push('/App/Recipes'));
				}).
				catch(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.authenticateFailed());
				});

		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);