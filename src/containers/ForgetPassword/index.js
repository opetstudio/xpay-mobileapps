import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import ForgetPasswordActions from './redux'
import ForgetPassword from '../../components/ForgetPassword'

class ForgetPasswordContainer extends Component {
  componentDidMount () {
    const { forgetPasswordFormReset } = this.props
    forgetPasswordFormReset()
  }

  handleSubmit (email) {
    const { forgetPasswordFormSubmit } = this.props
    forgetPasswordFormSubmit({ email })
  }

  render () {
    const {
      status,
      errors,
      isRequest,
      forgetPasswordFormSubmit,
      navigation,
      forgetPasswordFormReset
    } = this.props
    return (
      <ForgetPassword
        navigation={navigation}
        handleOnSubmit={this.handleSubmit.bind(this)}
        status={status}
        errors={errors}
        isRequest={isRequest}
      />
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  status: state.forgetpassword.status,
  errors: state.forgetpassword.errors,
  isRequest: state.forgetpassword.isRequest
})
  
const mapDispatchToProps = dispatch => ({
  forgetPasswordFormSubmit: data => dispatch(ForgetPasswordActions.forgetPasswordFormSubmit(data)),
  forgetPasswordFormReset: data => dispatch(ForgetPasswordActions.forgetPasswordFormReset())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgetPasswordContainer)
