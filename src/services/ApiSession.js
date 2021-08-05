// a library to wrap and simplify api calls
// import AppConfig from '../config/AppConfig'
import { generateHmac } from '../lib/Utils'

export const create = api => ({
  sessionLogin: ({ userid, password }) => {
    // console.log('sessionLogin data=', data)
    // let body = { username: data.userid, password: data.password }
    // console.log('body==>', JSON.stringify(body))
    // api.setHeader('mac', generateHmac(JSON.stringify(body)))
    // const resp = api.post('/plink/login', { email: data.userid, password: data.password })
    const query = `query{login(username:"${userid}", password: "${password}"){access_token, error, user{ user_id }}}`
    const body = { query }
    console.log('Login body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  },
  sessionLogout: (data, opt) => {
    console.log('sessionLogout invoked')
    // api.setHeader('mac', '6905fad8847d8548e225e1701ada9f502741e0f6c3fd68697017e5c06b7ff733')
    // api.setHeader(AppConfig.authHeader, opt.session.token_type + ' ' + opt.session.access_token)
    return api.get('/plink/logout')
  }
})
