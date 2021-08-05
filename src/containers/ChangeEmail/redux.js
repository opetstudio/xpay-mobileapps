import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  changeemailResetForm: null,
  changeemailSubmit: ['data'],
  changeemailSubmitDone: ['data'],
  reset: null
})

export const ChangeemailTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  status: 0,
  errors: [],
  otpRefNum: '',
  newEmail: ''
})

export const changeemailResetForm = (state) => state.merge({ isRequest: false, errors: [], status: 0 })
export const changeemailSubmit = (state, { data }) => state.merge({ isRequest: true })
export const changeemailSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHANGEEMAIL_SUBMIT]: changeemailSubmit,
  [Types.CHANGEEMAIL_SUBMIT_DONE]: changeemailSubmitDone,
  [Types.CHANGEEMAIL_RESET_FORM]: changeemailResetForm,
  [Types.RESET]: (state) => INITIAL_STATE
})
