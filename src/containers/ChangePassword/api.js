import {generateHmac, getAccessToken} from '../../lib/Utils'

// a library to wrap and simplify api calls
export const create = api => ({
  changepasswordSubmit: async ({ password, newPassword, newPasswordConf, userId }) => {
    const ac = await getAccessToken()
    console.log('invoked api changepasswordSubmit')
    const body = { query: `mutation{changeUserPassword(access_token:"${ac}",user_id:"${userId}",new_password:"${newPassword}",password:"${password}"){ new_token status error success }}` }
    console.log('body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
