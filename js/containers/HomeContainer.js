import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/Home';
import * as actions from '../actions';
import * as api from '../data/api';

const mapStateToProps = (state) => {
	return {
		username: state.auth.username
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);