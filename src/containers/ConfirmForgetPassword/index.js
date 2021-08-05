import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConfirmForgetPasswordActions from './redux'
import ConfirmForgetPassword from '../../components/ConfirmForgetPassword'

export class ForgetPasswordContainer extends Component {
  componentDidMount () {
    const { reset } = this.props
    reset()
  }

  componentWillUnmount () {
    const { reset } = this.props
    reset()
  }

  handleSubmit (otp, newPassword) {
    const { submit, otpRefnumber, email } = this.props
    submit({ email, otp, newPassword, otpRefnumber })
  }

  render () {
    const { status, errors, isRequest, navigation, reset } = this.props
        return (
      <ConfirmForgetPassword
        navigation={navigation}
        handleOnSubmit={this.handleSubmit.bind(this)}
        reset={reset}
        status={status}
        errors={errors}
        isRequest={isRequest}
      />
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  status: state.confirmforgetpassword.status,
  errors: state.confirmforgetpassword.errors,
  isRequest: state.confirmforgetpassword.isRequest,
  otpRefnumber: state.forgetpassword.otpRefnumber,
  email: state.forgetpassword.email
})
    
  const mapDispatchToProps = dispatch => ({
  submit: data => dispatch(ConfirmForgetPasswordActions.confirmForgetPasswordFormSubmit(data)),
  reset: data => dispatch(ConfirmForgetPasswordActions.confirmForgetPasswordFormReset())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordContainer)
