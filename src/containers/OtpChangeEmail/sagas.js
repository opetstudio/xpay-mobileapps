import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import OtpchangeemailActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { NavigationActions } from 'react-navigation'
import _ from 'lodash'

export function * otpchangeemailSubmit (api, { data }) {
  console.log('invoked sagas otpchangeemailSubmit data=>', data)
  const response = yield call(api.otpchangeemailSubmit, data)
  console.log('otpchangeemailSubmit response ', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  // detect error from body
  const statusBody = parseInt(path(['data', 'data', 'submitOtp', 'status'], response) || 0)
  const errorBody = path(['data', 'data', 'submitOtp', 'error'], response)
  const newToken = path(['data', 'data', 'submitOtp', 'new_token'], response)
  const otpRefNum = path(['data', 'data', 'submitOtp', 'otpRefNum'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  yield put(OtpchangeemailActions.otpchangeemailSubmitDone({ status, errors, otpRefNum }))
  if (!_.isEmpty(newToken)) yield put(SessionActions.sessionLoginSuccess({ sessionToken: newToken }))
  //   if (status === 200) yield put(NavigationActions.back({}))

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
