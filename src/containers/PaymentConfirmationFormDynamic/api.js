// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac, getAccessToken} from '../../lib/Utils'

export const create = api => ({
  paymentConfirmationFormDynamicSubmit: async ({ merchantId, transactionId, amount, userId, password, institutionId, qrId }) => {
    const accessToken = await getAccessToken()
    console.log('accessToken====', accessToken)
    // console.log('signupFormSubmit email=' + email + '|deviceId=' + deviceId)
    // const query = `query{  login(username:\"0L3KCRWv\", password: \"02Hfzt\") {\n    access_token\n    status\n    error\n  }\n}"`
    const mutation = `mutation{dynamicQrPayment(merchant_id: "${merchantId}", transaction_id: "${transactionId}", amount: ${amount}, user_id: "${userId}", password: "${password}", institution_id: "${institutionId}",qr_id: "${qrId}") { success, status, error}}`
    const body = { query: mutation }
    console.log('dynamicPayment graphql==>' + JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
