// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac, getAccessToken} from '../../lib/Utils'

export const create = api => ({
  scanqrSubmitPayment: async ({ merchantId, qrId, userId, institutionId }) => {
    const accessToken = await getAccessToken()
    console.log('accessToken====', accessToken)
    const mutation = `mutation{scanQrStatic(merchant_id: "${merchantId}", qr_id: "${qrId}", user_id: "${userId}", institution_id: "${institutionId}") { transaction_id, merchant_id, billing_id, success, status, error, merchant_name}}`
    const body = { query: mutation }
    console.log('scanqrSubmitPayment graphql==>' + JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
