import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Container } from 'native-base'
import PaymentReceiptActions from './redux'
import PaymentReceipt from '../../components/PaymentReceipt'

class PaymentReceiptContainer extends Component {
  componentDidMount () {
    const { getReceipt, transactionId } = this.props
    getReceipt({ transaction_id: transactionId })
  }

  render () {
    const { trx_amount, trx_id, merchant_name, trx_date, trx_method } = this.props
    return (
      <PaymentReceipt trx_amount={trx_amount} trx_id={trx_id} merchant_name={merchant_name} trx_date={trx_date} trx_method={trx_method} />
    )
  }
}
export default connect(state => ({
  status: state.paymentreceipt.status,
  errors: state.paymentreceipt.errors,
  trx_amount: state.paymentreceipt.transaction_amount,
  trx_id: state.paymentreceipt.transaction_id,
  merchant_name: state.paymentreceipt.merchant_username,
  trx_date: state.paymentreceipt.updated_created,
  trx_method: state.paymentreceipt.transaction_method
}), (dispatch) => ({
  getReceipt: data => dispatch(PaymentReceiptActions.getReceipt(data))
}))(PaymentReceiptContainer)
