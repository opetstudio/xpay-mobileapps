// a library to wrap and simplify api calls
import _ from 'lodash'
import AppConfig from '../../config/AppConfig'
import { getAccessToken, generateHmac } from '../../lib/Utils'

export const create = api => ({
  fetchDetailService: ({
    id,
    serviceName,
    fields,
    additionalFields,
    whereCondition
  }) => {
    let theWhereConditionString = ''
    const arr2 = []
    for (const prop in whereCondition) {
      const wcValue = whereCondition[prop]
      // console.log('wcValue===>', wcValue)
      // check type
      if (wcValue instanceof Array) arr2.push(`${prop}: ${JSON.stringify(wcValue)}`)
      else arr2.push(`${prop}: "${whereCondition[prop]}"`)
    }
    if (!_.isEmpty(arr2)) theWhereConditionString = _.join(arr2, ',') + ','
    const body = `query{${serviceName}(${id ? 'id: " ' + id + ' ",' : ''} ${theWhereConditionString} ){status,error,data_detail{${fields}}${additionalFields ? ',' + additionalFields.join(',') : ''}}}`
    const query = { query: body }
    api.setHeader('hmac', generateHmac(JSON.stringify(query)))
    api.setHeader('AccessToken', getAccessToken())
    // console.log('queryhmac===>>>', generateHmac(query))
    const resp = api.post(AppConfig.graphqlPath, query)
    return resp
  }
})
