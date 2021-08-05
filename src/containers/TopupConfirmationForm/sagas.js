import { call, put } from 'redux-saga/effects'
import TopupConfirmationFormActions from './redux'
import { StackActions } from 'react-navigation'
import { path } from 'ramda'
import _ from 'lodash'

export function * topupConfirmationFormSubmit (api, { data }) {
  console.log('invoked sagas topupConfirmationFormSubmit data=>', data)
  const response = yield call(api.topupConfirmationFormSubmit, data)
  console.log('topupConfirmationFormSubmit response=', response)
  const err = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) err.push({ message: response.problem })
  // detect error from body
  const statusBody = path(['data', 'data', 'paymentTopUpMerchant', 'status'], response)
  const errorBody = path(['data', 'data', 'paymentTopUpMerchant', 'error'], response)
  if (!_.isEmpty(errorBody)) err.push({ message: errorBody})
  const status = statusBody || response.status
  const errors=[]
  if(!_.isEmpty(err))
  {
    err.map((r,i)=>{
      if(r.message == "Expected type Int!, found undefined.") errors.push({message:'Amount is not allowed to be empty'})
      else if(r.message == "CLIENT_ERROR") errors.push({message:'System error'})
      else errors.push(r)
    })
  }
  yield put(TopupConfirmationFormActions.topupConfirmationFormSubmitDone({ status, errors }))

  if (status === 200) {
    console.log('payment success')
    // amount, password, merchantId, transactionId, billId, userId, merchantName
    
    const { amount, password, merchantId, transactionId, billId, serialId, userId, merchantName } = data
    yield put(StackActions.replace({ routeName: 'ScreenTopupReceipt', params: { transactionId } }))
  } else {
    console.log('topup failed')
  }
}
