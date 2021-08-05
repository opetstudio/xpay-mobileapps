import { call, put } from 'redux-saga/effects'
import Actions from './redux'
import { consumeGraphqlResponse } from '../../transforms/TransformAttributes'
// import { callErrorToast } from '../../Utils/Utils'
export function * emoneyFetchOneByuserid (api, { data }) {
  const resp = consumeGraphqlResponse({ response: yield call(api.fetchDetailService, data) })
  yield put(Actions.emoneyFetchOneByuseridDone({ ...resp }))
}
