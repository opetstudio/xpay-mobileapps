import { call, put, select } from 'redux-saga/effects'
import ScanqrActions from './redux'
import { path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

export function * scanqrSubmitPayment (api, { data }) {
  console.log('invoked sagas scanqrSubmitPayment data=>', data)
  const response = yield call(api.scanqrSubmitPayment, data)
  console.log('scanqrSubmitPayment response=', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'scanQrStatic', 'status'], response)
  const errorBody = path(['data', 'data', 'scanQrStatic', 'error'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(ScanqrActions.scanqrSubmitPaymentDone({ status, errors }))
  const transactionId = path(['data', 'data', 'scanQrStatic', 'transaction_id'], response)
  const billingId = path(['data', 'data', 'scanQrStatic', 'billing_id'], response)
  const merchantName = path(['data', 'data', 'scanQrStatic', 'merchant_name'], response)
  const merchantId = path(['data', 'data', 'scanQrStatic', 'merchant_id'], response)
  const amount = path(['data', 'data', 'scanQrStatic', 'amount'], response)
  if (status === 200 && data.merchantId === merchantId) {
    console.log('redirect to screen payment confirmation')
    yield put(StackActions.replace({ routeName: 'ScreenTransactionConfirmation', params: { billingId, transactionId, merchantName, amount, merchantId, institutionId: data.institutionId } }))
  } else {
    console.log('invalid transaction')
  }

  // const errors = path(['data', 'errors'], response) || []
  // console.log('errors==>', errors)
  // errors.forEach(r => {
  //   errorMessage += r.message
  // })
  // errorMessage = errorMessage || response.problem
  // yield put(ScanqrActions.scanqrSubmitPaymentDone({ errorMessage, billingId: 'billingId001', transactionId: 'transactionId001', merchantName: 'Koperasi Prisma', amount: 0 }))

  // yield put(StackActions.replace({ routeName: 'ScreenTransactionConfirmation', params: { billingId: 'billingId001', transactionId: 'transactionId001', merchantName: 'Koperasi Prisma', amount: 0 } }))
}
