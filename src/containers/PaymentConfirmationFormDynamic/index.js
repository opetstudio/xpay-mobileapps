import React, { Component } from 'react'
import { connect } from 'react-redux'
import PaymentConfirmationFormDynamic from '../../components/PaymentConfirmationFormDynamic'
import PaymentConfirmationFormDynamicActions from './redux'

class index extends Component {
  componentDidMount () {
    const { paymentConfirmationDynamicResetForm } = this.props
    paymentConfirmationDynamicResetForm()
  }

  handleOnPressSubmitForm ({ amount, password }) {
    const { paymentConfirmationFormDynamicSubmit, merchantId, transactionId, billingId: billId, userId, merchantName, qrId, institutionId } = this.props
    paymentConfirmationFormDynamicSubmit({ amount, password, merchantId, transactionId, billId, userId, merchantName, qrId, institutionId })
  }

  render () {
    const { merchantName, amount, errors, status, isRequest } = this.props
    return (
      <PaymentConfirmationFormDynamic
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
  status: state.paymentconfirmationformdynamic.status,
  errors: state.paymentconfirmationformdynamic.errors,
  isRequest: state.paymentconfirmationformdynamic.isRequest
}), (dispatch) => ({
  paymentConfirmationFormDynamicSubmit: data => dispatch(PaymentConfirmationFormDynamicActions.paymentConfirmationFormDynamicSubmit(data)),
  paymentConfirmationDynamicResetForm: data => dispatch(PaymentConfirmationFormDynamicActions.paymentConfirmationDynamicResetForm())
}))(index)
