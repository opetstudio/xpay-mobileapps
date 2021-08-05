// a library to wrap and simplify api calls
import AppConfig from '../../config/AppConfig'
import {generateHmac} from '../../lib/Utils'

export const create = api => ({
  otpvalidationFormSubmit: (data) => {
    const body = '{}'
    api.setHeader('mac', generateHmac(JSON.stringify(body)))
    const resp = api.post('/plink/login', {})
    return resp
  }
})
