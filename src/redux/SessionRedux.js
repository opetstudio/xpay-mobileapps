import { AsyncStorage } from 'react-native'
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { setSession } from '../lib/Utils'
import AppConfig from '../config/AppConfig'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,

  sessionLoginWithSocmed: ['data'],
  sessionRequest: ['data'],
  sessionRegserver: ['data'],
  sessionSuccess: ['payload'],
  sessionFailure: ['errorMessage'],
  // logout
  sessionLogout: null,
  sessionLogoutSuccess: ['data'],
  sessionLogoutFailed: ['data'],

  // login
  sessionLoginResetForm: null,
  sessionLogin: ['data'],
  sessionLoginDone: ['data'],
  sessionLoginSuccess: ['data'],
  sessionLoginFailed: ['data'],

  sessionPatch: ['data']
})

export const SessionTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  userId: null,
  data: null,
  fetching: null,
  loginWith: null,
  currentUser: null,
  sessionToken: null,
  payload: null,
  error: null,
  errorMessage: null,
  isLoginCompleted: true,
  isLoggedIn: null,
  sessionLoginMSG: { ir: false, rc: '', rm: '', rd: '' }, // ir=isRequesting rc=responseCode rd=redponseDescription
  sessionLogoutMSG: { ir: false, rc: '', rm: '', rd: '' }, // ir=isRequesting rc=responseCode rd=redponseDescription
  errors: [],
  status: 0,
  isRequest: false
})

/* ------------- Selectors ------------- */

export const SessionSelectors = {
  getData: state => state.data,
  getCurrentUser: state => state.currentUser,
  sessionToken: state => state.sessionToken,
  getFetching: state => state.fetching,
  getIsLoginCompleted: state => state.isLoginCompleted,
  isError: state => state.error,
  getErrorMessage: state => state.errorMessage,
  sessionLoginMSG: st => st.sessionLoginMSG,
  sessionLogoutMSG: st => st.sessionLogoutMSG,
  isLoggedIn: state => state.isLoggedIn,
  getUserId: st => st.userId
}

/* ------------- Reducers ------------- */

export const loginWithSocmed = (state, action) => {
  const { data } = action
  return state.merge({ isLoginCompleted: false })
}
// request the data from an api
export const request = (state, action) => {
  const { data } = action
  __DEV__ && console.log('[SessionRedux] request action', action)
  __DEV__ && console.log('[SessionRedux] request state', state)
  return state.merge({ fetching: true, data, payload: null })
}
export const regserver = (state, action) => {
  const { data } = action
  __DEV__ && console.log('[SessionRedux] request action', action)
  __DEV__ && console.log('[SessionRedux] request state', state)
  return state.merge({ fetching: true, data, payload: null })
}

// successful api lookup
export const success = (state, { payload }) => {
  __DEV__ && console.log('[SessionRedux] success payload', payload)
  __DEV__ && console.log('[SessionRedux] success state', state)
  // const { loginWith, currentUser } = payload
  AsyncStorage.setItem('sessionToken', payload.sessionToken)
  return state.merge({ isLoginCompleted: true, fetching: false, error: null, payload, currentUser: payload.currentUser, loginWith: payload.loginWith, sessionToken: payload.sessionToken })
}

// Something went wrong somewhere.
export const failure = (state, { errorMessage }) => {
  // __DEV__ && console.log('===>p1', { errorMessage })
  return state.merge({ isLoginCompleted: true, fetching: false, error: true, payload: null, errorMessage })
}
export const logout = (state) => {
  AsyncStorage.clear()
  console.log('do logout')
  return state.merge({ isLoginCompleted: true, fetching: false, error: false, payload: null, currentUser: null, sessionToken: '' })
}

export const sessionPatch = (state, { data }) => {
  // console.log('merchantRequestPatch invoked. dataMerchant=', data.dataMerchant)
  const mergeData = {}
  if (data.hasOwnProperty('sessionToken')) mergeData.sessionToken = data.sessionToken
  if (data.hasOwnProperty('isLoggedIn')) mergeData.isLoggedIn = data.isLoggedIn
  if (data.hasOwnProperty('sessionLoginMSG')) mergeData.sessionLoginMSG = data.sessionLoginMSG
  if (data.hasOwnProperty('userId')) mergeData.userId = data.userId
  // if (data.pageSize) mergeData.pageSize = data.pageSize
  return state.merge(mergeData)
}
export const sessionLogin = (state, { data }) => state.merge({ isRequest: true, errors: [], status: 0 })
export const sessionLoginDone = (state, { data }) => state.merge({ isRequest: false, ...data })
export const sessionLoginResetForm = (state, { data }) => state.merge({ isRequest: false, errors: [], status: 0 })
export const sessionLoginSuccess = (state, { data: { sessionToken, userId } }) => {
  console.log('sessionLoginSuccess')
  setSession({ [AppConfig.loginFlag]: true, [AppConfig.sessionToken]: sessionToken, userId })
  return state.merge({ isRequest: false, sessionToken, isLoggedIn: true })
}
export const sessionLoginFailed = (state, { data }) => {
  console.log('sessionLoginFailed')
  data.isLoggedIn = false
  setSession({ [AppConfig.loginFlag]: false, userRole: '', [AppConfig.sessionToken]: '' })
  return sessionPatch(state, { data })
}
export const sessionLogout = (state, { data }) => {
  console.log('Invoke ==> logout')
  data.sessionLogoutMSG = { ir: true, rc: '', rm: '', rd: '' }
  return sessionPatch(state, { data })
}
export const sessionLogoutSuccess = (state, { data }) => {
  console.log('sessionLogoutSuccess')
  data.isLoggedIn = false
  setSession({ [AppConfig.loginFlag]: false, userRole: '', [AppConfig.sessionToken]: '' })
  return sessionPatch(state, { data })
}
export const sessionLogoutFailed = (state, { data }) => {
  console.log('sessionLogoutFailed')
  return sessionPatch(state, { data })
}

export const startup = state => state.merge({ isRequest: false, errors: [], status: 0 })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup,

  // logout
  [Types.SESSION_LOGOUT]: sessionLogout,
  [Types.SESSION_LOGOUT_SUCCESS]: sessionLogoutSuccess,
  [Types.SESSION_LOGOUT_FAILED]: sessionLogoutFailed,

  // login
  [Types.SESSION_LOGIN_RESET_FORM]: sessionLoginResetForm,
  [Types.SESSION_LOGIN]: sessionLogin,
  [Types.SESSION_LOGIN_DONE]: sessionLoginDone,
  [Types.SESSION_LOGIN_SUCCESS]: sessionLoginSuccess,
  [Types.SESSION_LOGIN_FAILED]: sessionLoginFailed,

  [Types.SESSION_PATCH]: sessionPatch,
  [Types.SESSION_LOGIN_WITH_SOCMED]: loginWithSocmed,
  [Types.SESSION_REQUEST]: request,
  [Types.SESSION_REGSERVER]: regserver,
  [Types.SESSION_SUCCESS]: success,
  [Types.SESSION_LOGOUT]: logout,
  [Types.SESSION_FAILURE]: failure
})
