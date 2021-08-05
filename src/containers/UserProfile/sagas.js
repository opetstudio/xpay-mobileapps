import { call, put, select } from 'redux-saga/effects'
import UserprofileActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { is, path } from 'ramda'
import _ from 'lodash'

export function * userprofileFetchUserProfileById (api, action) {
  console.log('invoked sagas userprofileFetchUserProfileById')
  // call api
  console.log('call api userprofileFetchUserProfileById api=>', api)
  const { data } = action
  const response = yield call(api.userprofileFetchUserProfileById, data)
  console.log('userprofileFetchUserProfileById response=', response)
  // consume response
  console.log('consume response ', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  const errorBody = path(['data', 'data', 'getProfile', 'error'], response)
  const statusBody = path(['data', 'data', 'login', 'status'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })
  const status = statusBody || response.status
  const profileDataMSG = {
    saldo: path(['data', 'data', 'getProfile', 'user', 'saldo'], response),
    fullName: path(['data', 'data', 'getProfile', 'user', 'full_name'], response),
    firstName: path(['data', 'data', 'getProfile', 'user', 'first_name'], response),
    lastName: path(['data', 'data', 'getProfile', 'user', 'last_name'], response),
    email: path(['data', 'data', 'getProfile', 'user', 'email'], response),
    address: path(['data', 'data', 'getProfile', 'user', 'address'], response),
    nickname: path(['data', 'data', 'getProfile', 'user', 'nickname'], response),
    username: path(['data', 'data', 'getProfile', 'user', 'username'], response),
    status,
    errors
  }
  console.log('consume MSG ', profileDataMSG)

  if (status === 200 && _.isEmpty(errors)) yield put(UserprofileActions.userprofileFetchUserProfileByIdDone(profileDataMSG))
  else yield put(UserprofileActions.userprofileFetchUserProfileByIdDone({ status, errors }))
}

export function * userprofileEditProfile (api, action) {
  console.log('invoked sagas userprofileEditProfile')
  // call api
  console.log('call api userprofileEditProfile api=>', api)
  const { data } = action
  const response = yield call(api.userprofileEditProfile, data)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })

  // detect error from body
  const statusBody = path(['data', 'data', 'changeUserProfile', 'status'], response)
  const errorBody = path(['data', 'data', 'changeUserProfile', 'error'], response)
  if (!_.isEmpty(errorBody)) errors.push({ message: errorBody })

  const newToken = path(['data', 'data', 'changeUserProfile', 'new_token'], response)
  const profileDataMSG = {
    status: statusBody || response.status,
    errors
  }
  // consume response
  console.log('consume response edit profile', response)

  yield put(UserprofileActions.userprofileEditProfileDone(profileDataMSG))

  // kalo ada session baru call function sessionLoginSuccess dari session redux
  if (!_.isEmpty(newToken)) yield put(SessionActions.sessionLoginSuccess({ sessionToken: newToken }))
}
