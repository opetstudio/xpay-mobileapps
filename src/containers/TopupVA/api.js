// a library to wrap and simplify api calls
import {generateHmac, getAccessToken} from '../../lib/Utils'
export const create = api => ({
  changeusernameSubmit: async ({ username, password, userId }) => {
    const ac = await getAccessToken()
    console.log('invoked api fetchUserChaneUsername')
    const body = { query: `mutation{changeUserName(access_token:"${ac}",user_id:"${userId}",new_username:"${username}",password:"${password}"){ new_token status error success }}` }
    console.log('body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
