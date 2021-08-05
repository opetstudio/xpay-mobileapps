import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Container } from 'native-base'
import ChangeUsername from '../../components/ChangeUsername'
import ChangeusernameActions from './redux'

export class ChangeUsernameContainer extends Component {
  componentDidMount () {
    const { changeusernameResetForm } = this.props
    changeusernameResetForm()
  }

  componentWillUnmount () {
    const { changeusernameResetForm } = this.props
    changeusernameResetForm()
  }

  handleOnSubmit (data) {
    const { changeusernameSubmit } = this.props
    changeusernameSubmit(data)
  }

  render () {
    const { username, userId, status, errors } = this.props
    return (
      <ChangeUsername
        username={username}
        userId={userId}
        onSubmit={this.handleOnSubmit.bind(this)}
        status={status}
        errors={errors}
      />
    )
  }
}
export default connect(state => ({
  errors: state.changeusername.errors,
  status: state.changeusername.status,
  username: state.userprofile.username,
  userId: state.session.userId
}), (dispatch) => ({
  changeusernameSubmit: data => dispatch(ChangeusernameActions.changeusernameSubmit(data)),
  changeusernameResetForm: data => dispatch(ChangeusernameActions.changeusernameResetForm(data))
}))(ChangeUsernameContainer)
