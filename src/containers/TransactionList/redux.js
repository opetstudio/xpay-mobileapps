import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  transactionHistory: ['data'],
  transactionHistoryDone: ['data'],
  reset: null
})

export const TrancationHistoryTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  isRequest: false,
  errorMessage: '',
  successMessage: '',
  transactionHistoryList: ''
})

export const transactionHistory = (state, { data }) => state.merge({ isRequest: true })
export const transactionHistoryDone = (state, { data }) => state.merge({ isRequest: false, ...data })

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TRANSACTION_HISTORY]: transactionHistory,
  [Types.TRANSACTION_HISTORY_DONE]: transactionHistoryDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
