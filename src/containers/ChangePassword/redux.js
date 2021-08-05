import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changepasswordSubmitDone: ['data'],
  changepasswordSubmit: ['data'],
  changepasswordResetForm: null,
  reset: null
})

export const ChangepasswordTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: []
})
/// Fetch User Profile data
export const changepasswordResetForm = (state, { data }) => state.merge({ isRequest: false, status: 0, errors: [] })
export const changepasswordSubmit = (state, { data }) => state.merge({ isRequest: true })
export const changepasswordSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGEPASSWORD_RESET_FORM]: changepasswordResetForm,
  [Types.CHANGEPASSWORD_SUBMIT]: changepasswordSubmit,
  [Types.CHANGEPASSWORD_SUBMIT_DONE]: changepasswordSubmitDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
