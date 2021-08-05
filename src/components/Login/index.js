
import React from 'react'
import { View, Image } from 'react-native'
import { Button, Text, Form, Input, Item, Spinner, Right, Left } from 'native-base'
// import PropTypes from 'prop-types'
import _ from 'lodash'
import { withNavigation } from 'react-navigation'
// import { connect } from 'react-redux'
import { Images } from '../../themes'
// import { isLoggedIn } from '../../lib/Utils'
import AppConfig from '../../config/AppConfig'

class index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { userid: '', password: '' }
  }

  render () {
    const { errors, isRequest, onSubmit } = this.props
    const { userid, password } = this.state
    return (
      <Form>
        <Text style={{ alignSelf: 'center', marginLeft: 5, fontSize: 13, color: '#989797' }}>Version {AppConfig.versionName}</Text>
        <Item style={{ margin: 20, marginLeft: 15, marginRight: 15 }}>
          <Image source={Images.mailred} style={{ width: 28, height: 28, marginLeft: 20 }} />
          <Input placeholder='E-mail' placeholderTextColor='#989797' style={{ marginLeft: 20, fontSize: 16, fontStyle: 'normal' }} onChangeText={(v) => this.setState({ userid: v })} keyboardType='email-address' />
        </Item>
        <Item style={{ marginLeft: 15, marginRight: 15 }}>
          <Image source={Images.lockred} style={{ width: 28, height: 28, marginLeft: 20 }} />
          <Input placeholder='Password' placeholderTextColor='#989797' secureTextEntry style={{ marginLeft: 20, fontSize: 16, fontStyle: 'normal' }} onChangeText={(v) => this.setState({ password: v })} />
        </Item>
        <View style={{ margin: 10, borderBottomColor: 'transparent', marginTop: 20, marginLeft: 15 }}>
          <Right><Text style={{ textDecorationLine: 'underline', fontSize: 16, color: '#000000' }} onPress={() => this.props.navigation.navigate('ScreenForgetPassword')}>Forgot Password ?</Text></Right>
        </View>
        {/* {!isEmptyOrNull(sessionLoginMSG.rd) && <Text style={{ color: 'red', marginTop: 20, textAlign: 'center' }}>{sessionLoginMSG.rd}</Text>} */}
        {!_.isEmpty(errors) && errors.map((r, i) => (<Text key={i} style={{ color: 'red', marginTop: 20, textAlign: 'center' }}>{r.message}</Text>))}
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <Left>
            <Item>
              {!isRequest && (
                <Button block style={{ backgroundColor: '#E92F2F', borderRadius: 10, width: 315, height: 52, marginTop: 15 }} onPress={() => onSubmit({ userid, password })}>
                  <Text>Sign In</Text>
                </Button>
              )}
              {isRequest && <Spinner color='green' />}
            </Item>
          </Left>
          <View style={{ margin: 5, flexDirection: 'row', alignItems: 'center' }} />
          <Text style={{ margin: 10, marginLeft: 40, alignItems: 'center', fontSize: 15, textAlign: 'center' }}>Not a Member ?<Text style={{ textDecorationLine: 'underline', color: '#E92F2F', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('ScreenSignup')}>Join Now</Text></Text>
          <View style={{ marginTop: '20%' }}>
            <Text style={{ alignSelf: 'center', fontSize: 15, textAlign: 'justify' }}>By logging in or join now , I agree to our <Text style={{ color: '#E92F2F', textDecorationLine: 'underline' }} onPress={() => this.props.navigation.navigate('ScreenPrivacyPolicy')}>Privacy Policy</Text>.</Text>
          </View>
        </View>
      </Form>
    )
  }
}
export default withNavigation(index)
