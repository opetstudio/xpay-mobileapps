// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac, generateHmacSerialNumber, getAccessToken} from '../../lib/Utils'

export const create = api => ({
  scanqrSubmitTopupMerchant: async ({ merchantId, qrId, userId, serialId, amount, serialNumber,transactionId }) => {
    const accessToken = await getAccessToken()
    console.log('accessToken====', accessToken)
    const mutation = `mutation{scanQrTopUpMerchant(merchant_id: "${merchantId}", qr_id: "${qrId}", user_id: "${userId}", serial_id: "${serialId}", amount: ${amount},serial_number: "${generateHmacSerialNumber(serialNumber)}",transaction_id: "${transactionId}") { success, status, error }}`
    const body = { query: mutation }
    console.log('scanqrSubmitTopupMerchant graphql==>' + mutation)
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
