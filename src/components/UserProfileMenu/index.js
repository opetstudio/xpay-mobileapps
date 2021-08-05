import React, { Component } from 'react'
import { List, Content, Icon, ListItem, Text, Button, Container, Left, Right } from 'native-base'
import { StyleSheet, View, SafeAreaView, ScrollView, AlertIOS, ToastAndroid, Alert } from 'react-native'
import { connect } from 'react-redux'
import colors from '../../themes/Colors'
import AppConfig from '../../config/AppConfig'

export default class index extends Component {
  _logout () {
    Alert.alert(
      'Logout',
      'Apakah anda yakin untuk keluar dari akun anda?',
      [
        { text: 'Tidak', onPress: () => console.log('Tidak Pressed'), style: 'cancel' },
        { text: 'Ya', onPress: () => this.props.logout({}) }
      ],
      { cancelable: false }
    )
  }

  render () {
    return (
      <SafeAreaView style={{ backgroundColor: '#ededed' }}>
        <ScrollView>
          <List style={{ backgroundColor: 'white' }}>
          <Text style={{ marginVertical: 5, marginLeft: 10,fontSize:17 }}>Profile</Text>

            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenEditUserProfile') }}>
              <Left>
                <Icon name='pencil' type='Foundation' style={{ marginHorizontal: 5 }} />
                <Text>Ubah Profil</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>

            {/* <ListItem noIndent>
                    <Left>
                    <Icon name="credit-card" type="Foundation" style={{marginHorizontal:5}}/>
                    <Text>My Cards</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward"/>
                    </Right>
                </ListItem> */}
          </List>
          <List style={{ backgroundColor: 'white', marginTop: 10}}>
          <Text style={{ marginVertical: 5, marginLeft: 10, fontSize:17 }}>Account</Text>

            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenChangeUsername') }}>
              <Left>
                <Icon name='torso' type='Foundation' style={{ marginHorizontal: 5 }} />
                <Text>Ubah Username</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenChangeEmail') }}>
              <Left>
                <Icon name='mail' type='Foundation' style={{ marginHorizontal: 5 }} />
                <Text>Ganti Email</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenChangePassword') }}>
              <Left>
                <Icon name='key' type='Foundation' style={{ marginHorizontal: 5 }} />
                <Text>Ubah Password</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
          </List>
          <List style={{ backgroundColor: 'white', marginTop:10 }}>
          <Text style={{ marginVertical: 5, marginLeft: 10, fontSize:17}}>Topup</Text>

            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenScanQrTopupMerchant') }}>
              <Left>
                <Icon name='qrcode' type='AntDesign' style={{ marginHorizontal: 5 }} />
                <Text >TopUp Via Merchant </Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
            {/* <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenTopupVA') }}>
              <Left>
                <Icon name='credit-card' type='Foundation' style={{ marginHorizontal: 5 }} />
                <Text>TopUp Via Virtual Account</Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem> */}
          </List>
          <List style={{ backgroundColor: 'white', marginTop:10 }}>
          <Text style={{ marginVertical: 5, marginLeft: 10, fontSize:17}}>About</Text>
            <ListItem noIndent button onPress={() => { this.props.navigation.navigate('ScreenPrivacyPolicyAbout') }}>
              <Left>
                <Icon name='shield-alt' type='FontAwesome5' style={{ marginHorizontal: 5 }} />
                <Text>Privacy Policy </Text>
              </Left>
              <Right>
                <Icon name='arrow-forward' />
              </Right>
            </ListItem>
          </List>
          {/* <List style={styles.list}>
                <ListItem noIndent>
                    <Left>
                    <Icon name="lock" type="Foundation" style={{marginHorizontal:5}}/>
                    <Text>Ubah security code</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
            </List> */}
          {/* <List style={styles.list}>
                <ListItem noIndent>
                    <Left>
                    <Icon name="list" type="Foundation" style={{marginHorizontal:5}}/>
                    <Text>Paduan Rayapay</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
                <ListItem noIndent>
                    <Left>
                    <Icon name="torso-business" type="Foundation" style={{marginHorizontal:5}}/>
                    <Text>Kebijakkan Privasi</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
                <ListItem noIndent>
                    <Left>
                    <Icon name="help" type="Foundation" style={{marginHorizontal:5}}/>
                    <Text>Pusat bantuan</Text>
                    </Left>
                    <Right>
                    <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
            </List> */}
          <View style={{ flex: 1, flexDirection: 'row', marginTop: 11 }}>
            <Text style={{ left: 0, marginLeft: 5, fontSize: 10 }}>Version {AppConfig.versionName}</Text>
          </View>

          <Button style={styles.btn_logout} onPress={() => { this._logout() }}>
            <Text style={{ textAlign: 'center',width: '100%'}}>Logout</Text>
          </Button>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  btn_logout: {
    flex: 1,
    backgroundColor:'rgba(218,55,49,1)',
    width:'50%',
    marginTop: 20,
    marginBottom: 50,
    alignSelf: 'center',
    borderRadius:10
  },
  list: {
    marginTop: 10,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold'
  }
})
