import { call, put } from 'redux-saga/effects'
import PaymentReceiptActions from './redux'
import { path } from 'ramda'
import _ from 'lodash'

export function * getPaymentReceiptResponse (api, action) {
  // console.log('invoked sagas changeusernameSubmit')
  // call api
  const { data } = action
  const response = yield call(api.getPaymentReceipt, data)
  console.log('response sagas', response)

  const statusBody = parseInt(path(['data', 'data', 'transactionReceipt', 'status'], response) || 0)
  const errorBody = path(['data', 'data', 'transactionReceipt', 'error'], response)
  const transaction_amount=path(['data', 'data', 'transactionReceipt', 'transaction','transaction_amount'], response)
  const transaction_id=path(['data', 'data', 'transactionReceipt', 'transaction','transaction_id'], response)
  const merchant_username=path(['data', 'data', 'transactionReceipt', 'transaction','merchant_name'], response)
  const updated=path(['data', 'data', 'transactionReceipt', 'transaction','updated_at'], response)
  const transaction_method=path(['data', 'data', 'transactionReceipt', 'transaction','transaction_method'], response)
  
  const tgl=parseInt(updated)
  const month= ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  const dt=new Date(tgl)
  const updated_created= dt.getDate()+' '+month[dt.getMonth()]+' '+dt.getFullYear()+' , '+dt.getHours()+':'+dt.getMinutes()
  console.log("updaated create ",updated_created)

  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  const DataMSG = {
    status,
    errors,
    transaction_amount,
    transaction_id,
    merchant_username,
    updated_created,
    transaction_method
  }
  yield put(PaymentReceiptActions.getReceiptDone(DataMSG))

}
