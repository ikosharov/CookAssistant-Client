import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Avatar from '../components/Avatar'
import * as actions from '../actions'

const mapStateToProps = (state) => {
	return {
		username: state.auth.username,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => {
			dispatch(actions.fetchStarted())
			dispatch(actions.signOut())
			dispatch(push('/Auth'))
			dispatch(actions.fetchFinished())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)