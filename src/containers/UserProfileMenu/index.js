import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserProfileMenu from '../../components/UserProfileMenu'
import SessionAction from '../../redux/SessionRedux'


class index extends Component {
  
  render () {
    return <UserProfileMenu navigation={this.props.navigation} logout={this.props.logout}/>;
  }
}

export default connect(
  null,
  dispatch => ({
    logout: data => dispatch(SessionAction.sessionLogout({data}))
  })
)(index)
