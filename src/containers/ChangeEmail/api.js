import {generateHmac} from '../../lib/Utils'
// a library to wrap and simplify api calls
export const create = api => ({
  changeemailSubmit: async ({ userId, email, password }) => {
    console.log('invoked api changeemailSubmit')
    const body = { query: `mutation{sendOtp(password:"${password}",new_email:"${email}",user_id:"${userId}"){ otpRefNum success status error }}` }
    console.log('changeemailSubmit body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
