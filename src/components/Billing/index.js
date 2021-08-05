import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'native-base'
// import { Center } from '@builderx/utils'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'

export default class UserProfile extends Component {
  
  render () {
    return (
      <View style={[styles.container, this.props.style]}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoPln} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>PLN</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoCicilan} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Uang Sekolah</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoIsiSaldo} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Top Up</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoInternet} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Paket Data</Text>
                </View>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoPascaBayar} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Pasca Bayar</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoBpjs} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>BPJS</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: 20, height: 30,}} source={Images.logoTvKabel} />
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>TV-Kabel</Text>
                </View>
                <View style={{width: '25%', alignItems: 'center'}}>
                    <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'black', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon type='Entypo' name='grid' style={{ fontSize: 30 }} />   
                    </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>Lihat-Semua</Text>
                </View>
            </View>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    overflow: 'hidden',
    height: 216,
    marginTop: 16
  }
})
