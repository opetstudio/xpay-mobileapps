// import Moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CryptoES from 'crypto-es'
import AppConfig from '../config/AppConfig'
import { merge, path, isEmpty, isNil } from 'ramda'

var AES = CryptoES.AES
var hmacSha256 = CryptoES.HmacSHA256
// var sha256 = require('crypto-es/sha256')
var EncUtf8 = CryptoES.enc.Utf8

// const userPriv = {
//   400: 'Customer',
//   310: 'Merchant Support',
//   300: 'Merchant Admin',
//   210: 'Institution Support',
//   200: 'Institution Admin',
//   100: 'Operator'
// }

export const getAccessToken = async (accessTokenState) => {
  // console.log('getAccessToken')
  const sessionToken = await getSession(AppConfig.sessionToken)
  accessTokenState = accessTokenState || sessionToken
  // const ok = true
  // dont encrypt
  // if (ok) return accessTokenState
  return accessTokenState

  // lakukan encrypt accessTokenState dengan RSA algoritma
  // publicToken sebagai secretKey nya
  // encryptedAccessToken = RSA(accessTokenState, publicToken)
  // encryptedBody = AES(body, encryptedAccessToken)

  // if (!publicToken || !sessionToken) return ''
  // const ciphertext = AES.encrypt(publicToken, sessionToken)
  // const plaintext = ciphertext.toString(EncUtf8)
  // const plaintext = ciphertext.toString(EncUtf8)
  // const test = aesjs.utils.utf8.toBytes('asdfadsfd')
  // const test = sha256(publicToken)
  // console.log('getAccessToken test=', test)
  // console.log('getAccessToken sha256=', test)
  // console.log('getAccessToken plaintext=', plaintext)
  // console.log('getAccessToken ciphertext=', ciphertext)
  // console.log('getAccessToken publicToken=', publicToken)
  // console.log('getAccessToken sessionToken=', sessionToken)
  // return ciphertext
  // return AES.decrypt(ciphertext.toString(), sessionToken)
}
export const decryptAt = (msg, key) => {
  console.log('decryptAt')
  const publicToken = getSession(AppConfig.publicToken)
  const sessionToken = getSession(AppConfig.sessionToken)
  if (!publicToken || !sessionToken) return ''
  const str = AES.decrypt(msg, sessionToken)
  var plaintext = str.toString(EncUtf8)
  return plaintext
}
export const isLoggedIn = async (isLoggedInState) => {
  console.log('isLoggedIn isLoggedInState1===>', isLoggedInState)
  if (isLoggedInState) return true
  const loginFlag = await getSession(AppConfig.loginFlag)
  console.log('isLoggedIn loginFlag===>', loginFlag)
  // isLoggedInState = isLoggedInState || loginFlag || false
  isLoggedInState = loginFlag || false
  if ((isLoggedInState === 'true' || isLoggedInState === true)) isLoggedInState = true
  else isLoggedInState = false
  console.log('isLoggedIn isLoggedInState2===>', isLoggedInState)
  return isLoggedInState
}
export const generateHmac = (msg) => {
  console.log('generateHmac msg=|' + msg + '|')
  const result = hmacSha256(msg, 'r4y4P4y2020').toString()
  console.log('generateHmac result=|' + result + '|')
  return result
  // HMACSHA256('testing', 'r4y4P4y2020').toString()
}
export const generateHmacSerialNumber = (msg) => {
  const result = hmacSha256(msg, '12345').toString()
  console.log('generated serial>>>>>>', result)
  return result
}
export const setSession = async (newSession, cb) => {
  console.log('setSession')
  console.log('newSession==>', setSession)
  const encryptedCurrentSession = await AsyncStorage.getItem(AppConfig.sessionData)
  let currentSessionJson = {}
  if (encryptedCurrentSession) {
    // decrypt
    var bytes = AES.decrypt(encryptedCurrentSession, 'prismalink2019')
    var decryptedData = bytes.toString(EncUtf8)
    currentSessionJson = JSON.parse(decryptedData)
    currentSessionJson = merge(currentSessionJson, newSession)
    console.log('currentSessionJson===>', currentSessionJson)
  }
  console.log('currentSessionJson1==>', currentSessionJson)
  var ciphertext = AES.encrypt(JSON.stringify(currentSessionJson), 'prismalink2019')
  var encryptedData = ciphertext.toString()
  await AsyncStorage.setItem(AppConfig.sessionData, encryptedData)
  if (cb) cb()
  return encryptedData
}
export const getSession = async (parameter, parameterInState) => {
  if (parameterInState !== null && parameterInState !== '' && parameterInState !== undefined) return parameterInState
  const encryptedCurrentSession = await AsyncStorage.getItem(AppConfig.sessionData)
  console.log('encryptedCurrentSession=', encryptedCurrentSession)
  let currentSessionJson = {}
  if (encryptedCurrentSession) {
    // decrypt
    var bytes = AES.decrypt(encryptedCurrentSession, 'prismalink2019')
    var decryptedData = bytes.toString(EncUtf8)
    console.log('decryptedData=', decryptedData)
    currentSessionJson = JSON.parse(decryptedData)
  }
  const sessionValue = path([parameter], currentSessionJson) || ''
  console.log('getSession parameter=', parameter)
  console.log('getSession sessionValue=', sessionValue)
  return sessionValue
}
export const getAllSession = async () => {
  const encryptedCurrentSession = await AsyncStorage.getItem(AppConfig.sessionData)
  console.log('encryptedCurrentSession=', encryptedCurrentSession)
  let currentSessionJson = {}
  if (encryptedCurrentSession) {
    // decrypt
    var bytes = AES.decrypt(encryptedCurrentSession, 'prismalink2019')
    var decryptedData = bytes.toString(EncUtf8)
    console.log('decryptedData=', decryptedData)
    currentSessionJson = JSON.parse(decryptedData)
  }
  // console.log('getSession sessionValue=', sessionValue)
  return currentSessionJson
}
export const isEmptyOrNull = (str) => {
  return isEmpty(str) || isNil(str)
}

