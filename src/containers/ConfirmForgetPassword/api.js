// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac} from '../../lib/Utils'

export const create = api => ({
  confirmforgetPassword: async ({ email,otp,newPassword,otpRefnumber }) => {
    console.log('confirmForgetPassword email=' + otp + '| newPass=' + newPassword)
    const mutation = `mutation{changePasswordViaForgetPassword(email:"${email}",otp:"${otp}",otpRefNum:"${otpRefnumber}", new_password:"${newPassword}"){ status error success }}`
    const body = { query: mutation }
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    const resp = api.post('/graphql', body)
    return resp
  }
})
