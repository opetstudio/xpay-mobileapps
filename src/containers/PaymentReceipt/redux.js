import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  resetGetReceipt: null,
  getReceipt: ['data'],
  getReceiptDone: ['data'],
  reset: null
})

export const PaymentReceiptTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  transaction_amount:'',
  transaction_id:'',
  merchant_username:'',
  updated_created:'',
  transaction_method:'',
  status: 0,
  errors: []
})

export const resetGetReceipt = (state) => state.merge({ isRequest: false, status: 0, errors: [] })
export const getReceipt = (state, { data }) => state.merge({ isRequest: true })
export const getReceiptDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_GET_RECEIPT]: resetGetReceipt,
  [Types.GET_RECEIPT]: getReceipt,
  [Types.GET_RECEIPT_DONE]: getReceiptDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
