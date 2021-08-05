import React, { Component } from 'react'
import {
  View,
  Image
} from 'react-native'
import { Button, Text } from 'native-base'
import { Images } from '../../themes'
import ViewPager from '@react-native-community/viewpager'
import { withNavigation } from 'react-navigation'

const dataCard = [
  { id: 1, cardNumber: '0000 0000 0000 0000', imgSource: Images.cardBni },
  { id: 2, cardNumber: '0000 0000 0000 0000', imgSource: Images.cardBri1 },
  { id: 3, cardNumber: '0000 0000 0000 0000', imgSource: Images.mandiri },
  { id: 4, cardNumber: '0000 0000 0000 0000', imgSource: Images.idcard1 },
  { id: 5, cardNumber: '0000 0000 0000 0000', imgSource: Images.idcard2 },
  { id: 6, cardNumber: '0000 0000 0000 0000', imgSource: Images.tableqr },
  { id: 7, cardNumber: '0000 0000 0000 0000', imgSource: Images.cardname }
]
class CardSwipe extends Component {
  render () {
    return (
      <View style={[{ height: 300 }, this.props.style]}>
        <ViewPager style={{ flex: 1 }}>
          {
            dataCard.map(r => (
              <View key={r.id}>
                <View style={{ flex: 1, margin: 5 }}>
                  <Image source={r.imgSource} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Button style={{ marginTop: 5, backgroundColor: '#87868c', height: 40 }} small onPress={() => this.props.navigation.navigate('ScreenShowqr')}>
                    <Text style={{ fontSize: 24, color: '#fff' }}>{r.cardNumber}</Text>
                    <Image style={{ resizeMode: 'contain', height: 35 }} source={Images.QR} />
                  </Button>
                </View>
              </View>
            ))
          }
        </ViewPager>
      </View>
    )
  }
}
export default withNavigation(CardSwipe)
