// a library to wrap and simplify api calls
import {generateHmac, getAccessToken} from '../../lib/Utils'
export const create = api => ({
  getPaymentDetail: async ({transaction_id}) => {
    console.log('invoked api getPaymentRecipt')
    // const body = { query: `mutation{transactionReceipt(transaction_id:"${transaction_id}"){ transaction_amount transaction_id updated_at transaction_method merchant_username status}}` }
    const body = { query: `mutation{detailPayment(transaction_id:"${transaction_id}"){ status success error transaction{ transaction_amount transaction_id updated_at transaction_method merchant_id merchant_name status } } }` }
    console.log('body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
