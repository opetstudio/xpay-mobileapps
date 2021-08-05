import { call, put, select } from 'redux-saga/effects'
import ScanqrDynamicActions from './redux'
import { path } from 'ramda'
import _ from 'lodash'
import { StackActions } from 'react-navigation'

export function * scanqrSubmitPaymentDynamic (api, { data }) {
  console.log('invoked sagas scanqrSubmitPaymentDynamic data=>', data)
  const response = yield call(api.scanqrSubmitPaymentDynamic, data)
  console.log('scanqrSubmitPaymentDynamic response=', response)
  const err = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) err.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'scanQrDynamic', 'status'], response)
  const errorBody = path(['data', 'data', 'scanQrDynamic', 'error'], response)
  if (!_.isEmpty(errorBody)) err.push({ message: errorBody })
  const status = statusBody || response.status
  const errors=[]
  if(!_.isEmpty(err))
  {
    err.map((r,i)=>{
      if(r.message == "Expected type Int!, found undefined.") errors.push({message:'Invalid QR Code'})
      else if(r.message == "CLIENT_ERROR") errors.push({message:'Please try again'})
      else errors.push(r)
    })
  }
  yield put(ScanqrDynamicActions.scanqrSubmitPaymentDynamicDone({ status, errors }))

  if (status === 200) {
    console.log('payment success')
    // amount, password, merchantId, transactionId, billId, userId, merchantName
    
    const { qrId, billingId, transactionId, merchantName, amount, merchantId, institutionId, } = data
    yield put(StackActions.replace({ routeName: 'ScreenTransactionConfirmationDynamic', params: { qrId, billingId, transactionId, merchantName, amount, merchantId, institutionId: data.institutionId } }))
  } else {
    console.log('payment failed')
  }
}
