import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ChangeemailActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { StackActions } from 'react-navigation'
import _ from 'lodash'

export function * changeemailSubmit (api, { data }) {
  console.log('invoked sagas changeemailSubmit')
  const response = yield call(api.changeemailSubmit, data)
  console.log('changeemailSubmit response >>>>>>', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = parseInt(path(['data', 'data', 'sendOtp', 'status'], response) || 0)
  const errorBody = path(['data', 'data', 'sendOtp', 'error'], response)
  const newToken = path(['data', 'data', 'sendOtp', 'new_token'], response)
  const otpRefNum = path(['data', 'data', 'sendOtp', 'otpRefNum'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(ChangeemailActions.changeemailSubmitDone({ status, errors, otpRefNum, newEmail: data.email }))
  if (!_.isEmpty(newToken)) yield put(SessionActions.sessionLoginSuccess({ sessionToken: newToken }))
  if (status === 200) yield put(StackActions.replace({ routeName: 'ScreenOtpChangeEmail', params: { otpRefNum } }))

  // let errorMessage = ''
  // for (let i = 0; i < responseErrorList.length; i++) {
  //   console.log('error msg====>',responseErrorList[i])
  //   const error = responseErrorList[i]
  //   if (error.message && error.message.includes('Otp expired')) console.log('error msg====>',error.message)
  // }

  // let DataMSG = {error: path(['data','data', 'sendOtp','error'], response),status: path(['data','data', 'sendOtp','status'], response),success: path(['data','data', 'sendOtp','success'], response),new_token: path(['data','data', 'sendOtp','new_token'], response),otpRefNum: path(['data','data', 'sendOtp','otpRefNum'], response),message: errorMessage}
  // // consume response
  // console.log('consume response changeEmail', response)
  // console.log('consume MSG changeemail', DataMSG)
  
  // yield put(ChangeEmailActions.editEmailResponseDone(DataMSG))
}
