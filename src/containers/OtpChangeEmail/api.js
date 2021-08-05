// a library to wrap and simplify api calls
import {generateHmac, getAccessToken} from '../../lib/Utils'
export const create = api => ({
  otpchangeemailSubmit: async ({ otp, newEmail, otpRefNum, userId }) => {
    console.log('invoked api otpchangeemailSubmit')
    const body = { query: `mutation{submitOtp(otpRefNum:"${otpRefNum}",otp:"${otp}",new_email:"${newEmail}",user_id:"${userId}"){ otpRefNum success status error }}` }
    console.log('otpchangeemailSubmit body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
