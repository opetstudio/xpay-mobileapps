import { Platform } from 'react-native'
// import { height, width } from '../../themes/dimensions';
import { Metrics } from '../../themes'

const width = Metrics.screenWidth
const height = Metrics.screenHeight

const IPHONE_X_SIZE = 812
console.log('height======>', height)

export const platform = Platform.OS

export const isIos = Platform.OS === 'ios'
export const isAndroid = Platform.OS === 'android'

export const isIphoneX =
  isIos && (height >= IPHONE_X_SIZE || width >= IPHONE_X_SIZE)
