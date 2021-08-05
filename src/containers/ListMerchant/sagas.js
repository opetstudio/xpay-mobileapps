import { call, put, select } from 'redux-saga/effects'
import ListMerchantActions from './redux'
import SessionActions from '../../redux/SessionRedux'
import { is, path } from 'ramda'
import _ from 'lodash'

export function * fetchAllRpMerchant (api, action) {
  console.log('invoked sagas fetchallmerchant')
  const { data } = action
  const response = yield call(api.fetchListMerchant, data)
  console.log('fetchallmerchant response=', response)
  // consume response
  console.log('consume response ', response)
  const errors = path(['data', 'errors'], response) || []
  if (!_.isEmpty(response.problem)) errors.push({ message: response.problem })
  const profileDataMSG = {
    merchant_data: path(['data', 'data', 'AllMerchant', 'merchant'], response),
    status: response.status,
    errors
  }
  console.log('consume MSG ', profileDataMSG)

  yield put(ListMerchantActions.fetchAllMerchantDone(profileDataMSG))
}

