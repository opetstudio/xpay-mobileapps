import {generateHmac, getAccessToken} from '../../lib/Utils'
// a library to wrap and simplify api calls
export const create = api => ({
  fetchListMerchant: async () => {
    const body = { query: `query{AllMerchant{ 
                          merchant{ email fullname business_name address } }
                            }` }
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    console.log('body==>', body)
    return api.post('/graphql', body)
  }
})
