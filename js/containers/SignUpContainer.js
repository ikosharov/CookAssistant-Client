import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignUp from '../components/SignUp';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		signUpFailed: state.auth.signUpFailed,
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
					dispatch(actions.signUpSucceeded(username, json.token, json.id));
					dispatch(push('/App/Recipes'));
				}).
				catch(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.signUpFailed());
				});

		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);