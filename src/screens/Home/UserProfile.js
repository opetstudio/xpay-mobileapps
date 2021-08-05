import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import { Button, Icon } from 'native-base'
// import { Center } from '@builderx/utils'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'
import { isEmpty } from 'ramda'

class UserProfile extends Component {
  static propTypes = {
    showSaldo: PropTypes.bool
  }

  constructor (props) {
    super(props)
    this.state = {
      showSaldo: this.props.showSaldo
    }
  }

  render () {
    const { profilePic, saldo, nickname } = this.props
    const Saldo = ('' + saldo).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    // let Saldo= new Intl.NumberFormat('IN').format(saldo)
    // if(Saldo == 'NaN'){Saldo=0}
    return (
      <View>
        <ImageBackground resizeMode='cover' source={Images.bghome2} style={[this.props.style, styles.container]}>
          <View style={{ flexDirection: 'column', flex: 1, width: '100%', height: 300 }}>
            {/* <TouchableOpacity style={styles.notif} onPress={()=>{this.props.navigation.navigate('ScreenPaymentTransactionDetail')}}>
                    <Image style={{resizeMode:'contain',width:40,height:40}} source={Images.notifunreadhome}/>
                </TouchableOpacity> */}
            <Text style={styles.txtIntro2}>E-wallet Saldo</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.txtIntro3}>IDR</Text>
              <Text style={styles.txtSaldo}>{Saldo}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
export default UserProfile

const styles = StyleSheet.create({
  txtIntro: {
    marginLeft: 10,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },
  txtIntro2: {
    marginLeft: 10,
    color: 'white',
    fontSize: 20,
    marginTop: 80
  },
  txtIntro3: {
    marginLeft: 10,
    color: 'white',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold'
  },
  txtSaldo: {
    marginLeft: 3,
    color: 'white',
    fontSize: 55,
    marginTop: 5,
    fontWeight: 'bold'
  },
  notif: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'transparent',
    borderRadius: isIphoneX ? 50 : 100
  },
  container: {
    // backgroundColor: 'rgba(218,55,49,1)',
    overflow: 'hidden',
    // height: 200,
    marginTop: -70,
    width: '100%',
    height: 300,
    alignItems: 'flex-start'
  },
  image: {
    width: 103,
    height: 103,
    backgroundColor: '#CCC',
    borderRadius: isIphoneX ? 50 : 100,
    margin: 10
  },
  textIntro: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    fontFamily: 'Roboto-Bold'
  },
  text: {
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
    fontFamily: 'Roboto-Bold'
  },
  text2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    fontFamily: 'roboto-Light'
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40
  },
  text3: {
    color: 'rgba(255,253,84,1)',
    fontSize: 25,
    fontFamily: 'roboto-Light'
  },
  iconStack: {
    width: '100%',
    alignItems: 'center',
    margin: 10
  }
})
