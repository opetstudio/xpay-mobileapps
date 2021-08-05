import { StyleSheet } from 'react-native'
import { Metrics, Colors as colors } from '../../themes'

const width = Metrics.screenWidth
const height = Metrics.screenHeight

export const styles = StyleSheet.create({
  footerIos: {backgroundColor: '#434343', height: 25},
  footerAndro: {backgroundColor: '#fff', shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.00,
  
  elevation: 24,}
})
