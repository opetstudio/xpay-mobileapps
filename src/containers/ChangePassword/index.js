import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChangepasswordActions from './redux'
import ChangePassword from '../../components/ChangePassword'

class ChangePasswordContainer extends Component {
  componentWillUnmount () {
    const { changepasswordResetForm } = this.props
    changepasswordResetForm()
  }

  handleOnSubmit (data) {
    console.log('handleOnSubmit===>', data)
    const { changepasswordSubmit } = this.props
    changepasswordSubmit(data)
  }

  render () {
    const { userId, errors, status } = this.props
    return (
      <ChangePassword
        status={status}
        errors={errors}
        userId={userId}
        onSubmit={this.handleOnSubmit.bind(this)}
      />)
  }
}
export default connect(state => ({
  userId: state.session.userId,
  errors: state.changepassword.errors,
  status: state.changepassword.status
}), (dispatch) => ({
  changepasswordSubmit: data => dispatch(ChangepasswordActions.changepasswordSubmit(data)),
  changepasswordResetForm: data => dispatch(ChangepasswordActions.changepasswordResetForm(data))
}))(ChangePasswordContainer)
