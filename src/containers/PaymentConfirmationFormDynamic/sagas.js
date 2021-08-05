import { call, put } from 'redux-saga/effects'
import PaymentConfirmationFormDynamicActions from './redux'
import { StackActions } from 'react-navigation'
import { path } from 'ramda'
import _ from 'lodash'

export function * paymentConfirmationFormDynamicSubmit (api, { data }) {
  console.log('invoked sagas paymentConfirmationFormDynamicSubmit data=>', data)
  const response = yield call(api.paymentConfirmationFormDynamicSubmit, data)
  console.log('paymentConfirmationFormDynamicSubmit response=', response)
  const err = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) err.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'dynamicQrPayment', 'status'], response)
  const errorBody = path(['data', 'data', 'dynamicQrPayment', 'error'], response)
  if (!_.isEmpty(errorBody)) err.push({ message: errorBody})
  const status = statusBody || response.status
  const errors=[]
  if(!_.isEmpty(err))
  {
    err.map((r,i)=>{
      if(r.message == "Expected type Int!, found undefined.") errors.push({message:'Amount is not allowed to be empty'})
      else if(r.message == "CLIENT_ERROR") errors.push({message:'Please try again'})
      else errors.push(r)
    })
  }
  yield put(PaymentConfirmationFormDynamicActions.paymentConfirmationFormDynamicSubmitDone({ status, errors }))

  if (status === 200) {
    console.log('payment success')
    // amount, password, merchantId, transactionId, billId, userId, merchantName
    
    const { qrId, amount, password, merchantId, transactionId, billId, userId, merchantName } = data
    yield put(StackActions.replace({ routeName: 'ScreenPaymentReceipt', params: { transactionId } }))
  } else {
    console.log('payment failed')
  }
}
