// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import { generateHmac } from '../../lib/Utils'

export const create = api => ({
  signupFormSubmit: ({ email, deviceId }) => {
    console.log('signupFormSubmit email=' + email + '|deviceId=' + deviceId)
    // const query = `query{  login(username:\"0L3KCRWv\", password: \"02Hfzt\") {\n    access_token\n    status\n    error\n  }\n}"`
    const mutation = `mutation{signUp(email: "${email}", device_id: "${deviceId}") { access_token, status, error, user{device_id} }}`
    console.log('signupFormSubmit mutation=' + mutation)
    const query = { query: mutation }
    const bodyRaw = JSON.stringify(query)
    const hmac = generateHmac(bodyRaw)
    console.log('bodyRaw===>testing|' + bodyRaw + '|')
    console.log('hmac===>', hmac)
    api.setHeader('hmac', hmac)
    const resp = api.post('/graphql', query)
    return resp
  }
})
