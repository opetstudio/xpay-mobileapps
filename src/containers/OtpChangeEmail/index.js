import React, { Component } from 'react'
import { connect } from 'react-redux'
import OtpChangeEmail from '../../components/OtpChangeEmail'
import OtpchangeemailActions from './redux'

class OtpChangeEmailContainer extends Component {
  handleOnSubmit (data) {
    const { otpchangeemailSubmit } = this.props
    otpchangeemailSubmit(data)
  }

  render () {
    const { newEmail, userId, otpRefNum, status, errors } = this.props
    return (
      <OtpChangeEmail
        userId={userId}
        newEmail={newEmail}
        otpRefNum={otpRefNum}
        errors={errors}
        status={status}
        onSubmit={this.handleOnSubmit.bind(this)}
      />
    )
  }
}
export default connect((state) => ({
  userId: state.session.userId,
  otpRefNum: state.changeemail.otpRefNum,
  errors: state.otpchangeemail.errors,
  status: state.otpchangeemail.status,
  newEmail: state.changeemail.newEmail, 
}), dispatch => ({
  otpchangeemailSubmit: data => dispatch(OtpchangeemailActions.otpchangeemailSubmit(data))
}))(OtpChangeEmailContainer)
