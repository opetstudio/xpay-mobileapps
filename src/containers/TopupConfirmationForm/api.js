// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac, getAccessToken} from '../../lib/Utils'

export const create = api => ({
  topupConfirmationFormSubmit: async ({ merchantId, transactionId, serialId, amount, userId, password, qrId}) => {
    const accessToken = await getAccessToken()
    console.log('accessToken====', accessToken)
    // console.log('signupFormSubmit email=' + email + '|deviceId=' + deviceId)
    // const query = `query{  login(username:\"0L3KCRWv\", password: \"02Hfzt\") {\n    access_token\n    status\n    error\n  }\n}"`
    const mutation = `mutation{paymentTopUpMerchant(merchant_id: "${merchantId}", transaction_id: "${transactionId}", serial_id: "${serialId}", amount: ${amount}, user_id: "${userId}", password: "${password}", qr_id: "${qrId}") { success, status, error}}`
    const body = { query: mutation }
    console.log('TopupPayment graphql==>' + JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
