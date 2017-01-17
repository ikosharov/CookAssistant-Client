import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Authenticated from '../components/Authenticated';
import * as actions from '../actions';

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
		userId: state.auth.id,
		isFetching: state.isFetching
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => {
			dispatch(actions.signOut());
			dispatch(push('/SignIn'));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Authenticated);