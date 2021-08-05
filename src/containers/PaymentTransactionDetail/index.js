import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import { Container } from 'native-base'
import PaymentTransactionDetailActions from './redux'
import PaymentTransactionDetail from '../../components/PaymentTransactionDetail'

class PaymentTransactionDetailContainer extends Component {
  componentDidMount () {
    const { getPaymentDetail } = this.props
    getPaymentDetail({ transaction_id: '1583916999317egquS' })
  }

  render () {
    const { trx_amount, trx_id, merchant_name, trx_date, trx_method, trx_status, merchant_id } = this.props
    return (
      <PaymentTransactionDetail trx_amount={trx_amount} trx_id={trx_id} merchant_name={merchant_name} trx_date={trx_date} trx_method={trx_method} trx_status={trx_status} merchant_id={merchant_id} />
    )
  }
}
export default connect(state => ({
  status: state.paymenttransactiondetail.status,
  errors: state.paymenttransactiondetail.errors,
  trx_amount: state.paymenttransactiondetail.transaction_amount,
  trx_id: state.paymenttransactiondetail.transaction_id,
  merchant_name: state.paymenttransactiondetail.merchant_username,
  merchant_id: state.paymenttransactiondetail.merchant_id,
  trx_date: state.paymenttransactiondetail.updated_at,
  trx_method: state.paymenttransactiondetail.transaction_method,
  trx_status: state.paymenttransactiondetail.status_trx
}), (dispatch) => ({
  getPaymentDetail: data => dispatch(PaymentTransactionDetailActions.getDetailPayment(data))
}))(PaymentTransactionDetailContainer)
