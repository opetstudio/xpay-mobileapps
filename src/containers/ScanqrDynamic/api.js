// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac, getAccessToken} from '../../lib/Utils'

export const create = api => ({
  scanqrSubmitPaymentDynamic: async ({ merchantId, qrId, userId, institutionId, amount, billingId, transactionId }) => {
    const accessToken = await getAccessToken()
    console.log('accessToken====', accessToken)
    const mutation = `mutation{scanQrDynamic(merchant_id: "${merchantId}", qr_id: "${qrId}", user_id: "${userId}", institution_id: "${institutionId}", amount: ${amount}, bill_id:"${billingId}", transaction_id:"${transactionId}") { transaction_id, merchant_id, billing_id, success, status, error, merchant_name}}`
    const body = { query: mutation }
    console.log('scanqrSubmitPaymentDynamic graphql==>' + JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
