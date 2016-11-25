import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignIn from '../components/SignIn';
import * as actions from '../actions';
import auth from '../auth';

const mapStateToProps = (state) => {
	return {
		signInFailed: state.auth.signInFailed,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: (username, password) => {
			dispatch(actions.fetchStarted());

			auth.signIn(username, password).
				then(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.signInSucceeded(username, password));
					dispatch(push('/'));
				}).
				catch(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.signInFailed());
				});

		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);