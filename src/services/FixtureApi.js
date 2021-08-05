export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../fixtures/gantman.json')
    const skellockData = require('../fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  },
  sessionLogin: (data) => {
    return {
      ok: true,
      data: require('../fixtures/sessionLogin.json')
    }
  },
  sessionLogout: (data) => {
    return {
      ok: true,
      data: require('../fixtures/sessionLogout.json')
    }
  },
  otpvalidationFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  addcardFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  signupFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  scanqrSubmitPayment: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  paymentConfirmationFormSubmit: (data) => {
    return {
      ok: true,
      data: {
        responseCode: '00',
        responseMessage: 'SUCCESS',
        responseDescription: 'SUCCESS'
      }
    }
  },
  changeemailSubmit: (data) => ({
    ok: true,
    data: {
      data: {
        sendOtp: {
          status: 200,
          error: '',
          otpRefNum: '123456'
        }
      }
    }
  }),
  otpchangeemailSubmit: (data) => ({
    ok: true,
    data: {
      data: {
        submitOtp: {
          status: 200,
          error: '',
          otpRefNum: '123456'
        }
      }
    }
  })
}
