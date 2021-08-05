import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  paymentConfirmationDynamicResetForm: null,
  paymentConfirmationFormDynamicSubmit: ['data'],
  paymentConfirmationFormDynamicSubmitDone: ['data'],
  paymentConfirmationFormDynamicSetData: ['data'],
  reset: null
})

export const PaymentConfirmationFormDynamicSubmitTypes = Types
export default Creators
export const INITIAL_STATE = Immutable({ isRequest: false, status: 0, errors: [] })
export const paymentConfirmationFormDynamicSetData = (state, { data }) => state.merge({ ...data })
export const paymentConfirmationDynamicResetForm = (state, { data }) => state.merge({ isRequest: false, status: 0, errors: [] })
export const paymentConfirmationFormDynamicSubmit = (state, { data }) => state.merge({ isRequest: true, status: 0, errors: [] })
export const paymentConfirmationFormDynamicSubmitDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PAYMENT_CONFIRMATION_DYNAMIC_RESET_FORM]: paymentConfirmationDynamicResetForm,
  [Types.PAYMENT_CONFIRMATION_FORM_DYNAMIC_SET_DATA]: paymentConfirmationFormDynamicSetData,
  [Types.PAYMENT_CONFIRMATION_FORM_DYNAMIC_SUBMIT_DONE]: paymentConfirmationFormDynamicSubmitDone,
  [Types.PAYMENT_CONFIRMATION_FORM_DYNAMIC_SUBMIT]: paymentConfirmationFormDynamicSubmit,
  [Types.RESET]: (state) => INITIAL_STATE
})
