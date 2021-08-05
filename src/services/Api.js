// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import { merge } from 'ramda'

// our "constructor"
const create = (baseURL = 'https://api.github.com/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getRoot = () => api.get('')
  const getRate = () => api.get('rate_limit')
  const getUser = (username) => api.get('search/users', {q: username})

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  // return {
  //   // a list of the API functions from step 2
  //   getRoot,
  //   getRate,
  //   getUser
  // }
  let apiMerged = {
    getRoot,
    getRate,
    getUser
  }
  apiMerged = merge(apiMerged, require('./ApiSession').create(api))
  apiMerged = merge(apiMerged, require('../screens/AddCard/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/Signup/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/UserProfile/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ChangeEmail/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ChangeUsername/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/Scanqr/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ChangePassword/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/OtpChangeEmail/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/TransactionList/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/PaymentReceipt/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/PaymentConfirmationForm/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/PaymentTransactionDetail/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/PaymentConfirmationForm/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ForgetPassword/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ConfirmForgetPassword/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ListMerchant/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ScanqrTopupMerchant/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/TopupConfirmationForm/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/ScanqrDynamic/api').create(api))
  apiMerged = merge(apiMerged, require('../containers/PaymentConfirmationFormDynamic/api').create(api))
  apiMerged = merge(apiMerged, require('../features/crud/api').create(api))
  apiMerged = merge(apiMerged, {})
  return {
    ...apiMerged
  }
}

// let's return back our create method as the default.
export default {
  create
}
