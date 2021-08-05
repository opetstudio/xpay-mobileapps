import { call, put } from 'redux-saga/effects'
import PaymentReceiptActions from './redux'
import { path } from 'ramda'
import _ from 'lodash'

export function * getDetailPayment (api, action) {
  // console.log('invoked sagas changeusernameSubmit')
  // call api
  const { data } = action
  const response = yield call(api.getPaymentDetail, data)
  console.log('response sagas payment detail', response)

  const statusBody = parseInt(path(['data', 'data', 'detailPayment', 'status'], response) || 0)
  const errorBody = path(['data', 'data', 'transactionReceipt', 'error'], response)
  const transaction_amount=path(['data', 'data', 'detailPayment', 'transaction','transaction_amount'], response)
  const transaction_id=path(['data', 'data', 'detailPayment', 'transaction','transaction_id'], response)
  const merchant_username=path(['data', 'data', 'detailPayment', 'transaction','merchant_name'], response)
  const updated=path(['data', 'data', 'detailPayment', 'transaction','updated_at'], response)
  const transaction_method=path(['data', 'data', 'detailPayment', 'transaction','transaction_method'], response)
  const merchant_id=path(['data', 'data', 'detailPayment', 'transaction','merchant_id'], response)
  let statustrx=path(['data', 'data', 'detailPayment', 'transaction','status'], response)

  
  const tgl=parseInt(updated)
  let status_trx={}
  if(statustrx == 'SETTLED'){ status_trx={  status_trx_color:'#40b35f',status_trx_text:'Berhasil'} }
  if(statustrx == 'PENDING'){ status_trx={  status_trx_color:'#dbb74b',status_trx_text:'Menunggu Pembayaran'} }
  if(statustrx == 'REJECT'){ status_trx={  status_trx_color:'#db4646',status_trx_text:'Dibatalkan'} }
  const month= ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  const dt=new Date(tgl)
  const updated_at= dt.getDate()+' '+month[dt.getMonth()]+' '+dt.getFullYear()+' , '+dt.getHours()+':'+dt.getMinutes()
  console.log("updaated create ",status_trx)

  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status

  const DataMSG = {
    status,
    errors,
    transaction_amount,
    transaction_id,
    merchant_username,
    merchant_id,
    updated_at,
    transaction_method,
    status_trx
  }
  yield put(PaymentReceiptActions.getDetailPaymentDone(DataMSG))

}
