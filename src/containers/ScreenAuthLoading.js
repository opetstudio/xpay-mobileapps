import React from 'react'
import { connect } from 'react-redux'
import SessionAction, {SessionSelectors} from '../redux/SessionRedux'
import ScreenAuthLoading from '../components/ScreenAuthLoading'

const mapStateToProps = (state, ownProps) => ({
  isLoggedIn: SessionSelectors.isLoggedIn(state.session),
  sessionToken: SessionSelectors.sessionToken(state.session)
})
const mapDispatchToProps = dispatch => ({
  sessionPatch: data => dispatch(SessionAction.sessionPatch(data))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )((props) => <ScreenAuthLoading {...props} />)
