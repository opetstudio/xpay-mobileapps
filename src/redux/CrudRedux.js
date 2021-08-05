import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  crudFetchData: ['data'],
  crudFetchDataDone: ['data'],
  reset: null
})

export const CrudTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  payload: {},
  loading: {},
  pageSize: {},
  pageIndex: {},
  data: {},
  count: {},
  pageCount: {},
  errors: {}
})
export const crudFetchData = (state, { data }) => {
  return state.merge({
    filter: { ...state.filter, [data.listName || data.serviceName]: data.filter },
    loading: { ...state.loading, [data.listName || data.serviceName]: true },
    pageSize: { ...state.pageSize, [data.listName || data.serviceName]: data.pageSize },
    pageIndex: { ...state.pageIndex, [data.listName || data.serviceName]: data.pageIndex }
  })
}
export const crudFetchDataDone = (state, { data }) => state.merge({
  loading: { ...state.loading, [data.listName || data.serviceName]: false },
  reload: { ...state.reload, [data.listName || data.serviceName]: false },
  data: { ...state.data, [data.listName || data.serviceName]: data.listData },
  count: { ...state.data, [data.listName || data.serviceName]: data.count },
  pageCount: { ...state.data, [data.listName || data.serviceName]: data.pageCount },
  errors: { ...state.errors, [data.listName || data.serviceName]: data.errors }
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CRUD_FETCH_DATA]: crudFetchData,
  [Types.CRUD_FETCH_DATA_DONE]: crudFetchDataDone,
  [Types.RESET]: (state) => INITIAL_STATE
})
