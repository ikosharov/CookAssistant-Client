import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import RecipesShell from '../components/RecipesShell';
import * as actions from '../actions';

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => {
			dispatch(actions.signOut());
			dispatch(push('/Auth'));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesShell);