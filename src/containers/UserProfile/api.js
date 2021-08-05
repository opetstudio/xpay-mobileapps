import {generateHmac, getAccessToken} from '../../lib/Utils'
// a library to wrap and simplify api calls
export const create = api => ({
  userprofileFetchUserProfileById: async ({ userId }) => {
    console.log('invoked api userprofileFetchUserProfileById')
    console.log('Id from async storage ======>' + userId)
    const body = { query: `query{getProfile(user_id:"${userId}"){user{full_name first_name last_name email address nickname username saldo} }}` }
    console.log('body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  },
  userprofileEditProfile: async ({ firstName, lastName, address, password, userId, nickname }) => {
    console.log('invoked api edituserprofile')
    const ac = await getAccessToken()
    console.log('Id from async storage ======>' + userId)
    const body = { query: `mutation{changeUserProfile(access_token:"${ac}",nickname: "${nickname}", user_id:"${userId}",full_name:"${firstName} ${lastName}",first_name:"${firstName}",last_name:"${lastName}",address:"""${address}""",password:"${password}") { new_token status error success }}` }
    console.log('body==>', JSON.stringify(body))
    api.setHeader('hmac', generateHmac(JSON.stringify(body)))
    return api.post('/graphql', body)
  }
})
