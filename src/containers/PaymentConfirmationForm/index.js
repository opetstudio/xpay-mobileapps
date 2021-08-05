import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentConfirmationForm from '../../components/PaymentConfirmationForm'
import PaymentConfirmationFormActions from './redux'

class index extends Component {
  componentDidMount () {
    const { paymentConfirmationResetForm } = this.props
    paymentConfirmationResetForm()
  }

  handleOnPressSubmitForm ({ amount, password }) {
    const { paymentConfirmationFormSubmit, merchantId, transactionId, billingId: billId, userId, merchantName, institutionId } = this.props
    paymentConfirmationFormSubmit({ amount, password, merchantId, transactionId, billId, userId, merchantName, institutionId })
  }

  render () {
    const { merchantName, amount, errors, status, isRequest } = this.props
    return (
      <PaymentConfirmationForm
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
  status: state.paymentconfirmationform.status,
  errors: state.paymentconfirmationform.errors,
  isRequest: state.paymentconfirmationform.isRequest
}), (dispatch) => ({
  paymentConfirmationFormSubmit: data => dispatch(PaymentConfirmationFormActions.paymentConfirmationFormSubmit(data)),
  paymentConfirmationResetForm: data => dispatch(PaymentConfirmationFormActions.paymentConfirmationResetForm())
}))(index)
