import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Icon, Left, Body, Right, CardItem, ListItem } from 'native-base'
// import { Center } from '@builderx/utils'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'
import { path } from 'ramda'

export default class UserProfile extends Component {
  componentDidMount () {
    console.log('===>load profile')
 }

  render () {
    console.log('popppppppppssss', this.props)
    const { profilePicture, fullName, email,saldo } = this.props
    let Saldo = ('' + saldo).replace(/(.)(?=(\d{3})+$)/g,'$1,')
    // let Saldo = new Intl.NumberFormat('IN').format(saldo)
    return (

      <View style={[styles.container, this.props.style]}>
        <View style={{backgroundColor: '#fff', height: 80}}>
          <Image source={profilePicture ? { uri: profilePicture } : Images.dafultUser} style={styles.image} />  
          <Text style={styles.text}>{fullName}</Text>
          <Text style={styles.text2}>{email}</Text>
        </View>

        <CardItem style={{ marginTop:1}}>
          <Left> 
            <View style={{backgroundColor: '#c4c4c4', borderRadius: 5, marginLeft:-5  }}>
              <Text style={{ color: 'black', fontSize:18,marginLeft:10, marginRight:10 }}>IDR {Saldo}</Text>  
            </View>
          </Left>
          {/* <Right>
            <View style={{flexDirection:'row'}}>
              <Icon name='qrcode' type='AntDesign' style={{ marginHorizontal: 5, color:'black' }} />
              <Text noIndent button onPress={() => { this.props.navigation.navigate('ScreenScanQrTopupMerchant') }}>TopUp Via Merchant </Text>
            </View>
          </Right> */}
        </CardItem>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  uploadImage: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: '#383838',
    borderRadius: 150,
    color: '#fff'
  },
  container: {
    backgroundColor: '#ededed',
    overflow: 'hidden',
    height: 140
  },
  image: {
    width: 60,
    height: 60,
    marginTop: 10,
    backgroundColor: '#CCC',
    borderRadius: isIphoneX ? 50 : 100,
    marginLeft:10
    
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    position:'absolute',
    marginLeft: 90,
    marginTop:20
  },
  text2: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    position:'absolute',
    marginLeft: 90,
    marginTop:40
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
