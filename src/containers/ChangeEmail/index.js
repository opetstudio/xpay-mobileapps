import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChangeEmail from '../../components/ChangeEmail'
import ChangeemailActions from './redux'

class ChangeEmailContainer extends Component {
  componentDidMount () {
    const { changeemailResetForm } = this.props
    changeemailResetForm()
  }

  componentWillUnmount () {
    const { changeemailResetForm } = this.props
    changeemailResetForm()
  }

  handleOnSubmit (data) {
    const { changeemailSubmit } = this.props
    changeemailSubmit(data)
  }

  render () {
    const { email, userId, errors, status } = this.props
    return (
      <ChangeEmail
        userId={userId}
        email={email}
        navigation={this.props.navigation}
        errors={errors}
        status={status}
        onSubmit={this.handleOnSubmit.bind(this)}
      />
    )
  }
}
export default connect((state) => ({
  email: state.userprofile.email,
  userId: state.session.userId,
  errors: state.changeemail.errors,
  status: state.changeemail.status
}), dispatch => ({
  changeemailSubmit: data => dispatch(ChangeemailActions.changeemailSubmit(data)),
  changeemailResetForm: data => dispatch(ChangeemailActions.changeemailResetForm(data))
}))(ChangeEmailContainer)
