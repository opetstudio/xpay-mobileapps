import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  paymentConfirmationResetForm: null,
  paymentConfirmationFormSubmit: ['data'],
  paymentConfirmationFormSubmitDone: ['data'],
  paymentConfirmationFormSetData: ['data'],
  reset: null
})

export const PaymentConfirmationFormSubmitTypes = Types
export default Creators
export const INITIAL_STATE = Immutable({ isRequest: false, status: 0, errors: [] })
export const paymentConfirmationFormSetData = (state, { data }) => state.merge({ ...data })
export const paymentConfirmationResetForm = (state, { data }) => state.merge({ isRequest: false, status: 0, errors: [] })
export const paymentConfirmationFormSubmit = (state, { data }) => state.merge({ isRequest: true, status: 0, errors: [] })
export const paymentConfirmationFormSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAYMENT_CONFIRMATION_RESET_FORM]: paymentConfirmationResetForm,
  [Types.PAYMENT_CONFIRMATION_FORM_SET_DATA]: paymentConfirmationFormSetData,
  [Types.PAYMENT_CONFIRMATION_FORM_SUBMIT_DONE]: paymentConfirmationFormSubmitDone,
  [Types.PAYMENT_CONFIRMATION_FORM_SUBMIT]: paymentConfirmationFormSubmit,
  [Types.RESET]: (state) => INITIAL_STATE
})
