// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac} from '../../lib/Utils'

export const create = api => ({
  forgetPassword: async ({ email }) => {
    console.log('signupFormSubmit email=',email)
    
    const mutation = `mutation{forgetPasswordSendOtp(email:"${email}"){ otpRefNum status error success }}`
    console.log('forgetPassword mutation=' + mutation)
    const body ={ query: mutation }
    api.setHeader('hmac',generateHmac(JSON.stringify(body)))
    const resp = api.post('/graphql', body)

    return resp
  }
})
