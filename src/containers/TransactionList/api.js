// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac} from '../../lib/Utils'

export const create = api => ({
  transactionHistory: ({ user_id }) => {
    console.log('transactionHistory user_id=' + user_id)
    // const query = `query{  login(username:\"0L3KCRWv\", password: \"02Hfzt\") {\n    access_token\n    status\n    error\n  }\n}"`
    const mutation = `{transactionHistory(user_id: "${user_id}") { status, success, error, transaction_history{ transaction_amount, created_at, transaction_method, merchant_name,transaction_id } }}`
    console.log('transactionHistory mutation=' + mutation)
    // const query = `{${datasource}(page: ${page}, size: ${size}, where: "${filterStr.replace(/"/g, '\\"')}", sort: "") {content{ ${col} } size number totalPages}}`

    // {"query":"mutation{\n  signUp(email: \"opetstudio@gmail.com\", device_id: \"device1\"){\n    access_token,\n    user_id,\n    user{\n      device_id\n    }\n  }\n}","variables":null}
    const body = { query: mutation }
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    const resp = api.post('/graphql', body)
    console.log('resp=', resp)
    return resp
  }
})
