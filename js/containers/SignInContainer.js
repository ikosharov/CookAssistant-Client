import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import SignIn from '../components/SignIn';
import * as actions from '../actions';
import * as api from '../data/api';

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

			api.signIn(username, password).
				then((token) => {
					dispatch(actions.fetchFinished());
					dispatch(actions.signInSucceeded(username, token));
					dispatch(push('/'));
				}).
				catch(() => {
					dispatch(actions.fetchFinished());
					dispatch(actions.signInFailed());
				});
		},
		googleSignIn: (google_response) => {
			api.googleSignIn(google_response).
				then(() => {
					dispatch(actions.signInSucceeded(google_response.profileObj.name, google_response.tokenId));
				}).
				catch(() => {
					dispatch(actions.signInFailed());
				});
		} 
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);