import React, { Component } from 'react'
import { connect } from 'react-redux'
import TopupConfirmationForm from '../../components/TopupConfirmationForm'
import TopupConfirmationFormActions from './redux'

class index extends Component {
  componentDidMount () {
    const { topupConfirmationResetForm } = this.props
    topupConfirmationResetForm()
  }

  handleOnPressSubmitForm ({ amount, password }) {
    const { topupConfirmationFormSubmit, merchantId, transactionId, billingId: billId, serialId, userId, merchantName, qrId, institutionId } = this.props
    topupConfirmationFormSubmit({ amount, password, merchantId, transactionId, billId, serialId, userId, merchantName, qrId, institutionId })
  }

  render () {
    const { merchantName, amount, errors, status, isRequest } = this.props
    return (
      <TopupConfirmationForm
        isRequest={isRequest}
        errors={errors}
        status={status}
        amount={amount}
        merchantName={merchantName}
        onPressSubmitForm={this.handleOnPressSubmitForm.bind(this)}
      />
    )
  }
}

export default connect((state) => ({
  userId: state.session.userId,
  status: state.topupconfirmationform.status,
  errors: state.topupconfirmationform.errors,
  isRequest: state.topupconfirmationform.isRequest
}), (dispatch) => ({
  topupConfirmationFormSubmit: data => dispatch(TopupConfirmationFormActions.topupConfirmationFormSubmit(data)),
  topupConfirmationResetForm: data => dispatch(TopupConfirmationFormActions.topupConfirmationResetForm())
}))(index)
