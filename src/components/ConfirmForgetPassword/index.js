import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Text,
  Spinner,
  Label
} from 'native-base'
import {Alert} from 'react-native'
import { Colors } from '../../themes'
import _ from 'lodash'
import { isEmptyOrNull } from '../../lib/Utils'
import { prop } from 'ramda'

export default class ConfirmForgetPassword extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      newPassword:'',
      confirmNewPassword:'',
      otp:'',
      msg:''
    }
    this.checkMessage=this.checkMessage.bind(this)
  }
  
  handleOnPressSubmitForm () {
    const { handleOnSubmit,isRequest,errors,reset } = this.props
    const { newPassword,confirmNewPassword,otp,msg } = this.state
   this.setState({msg:''})
   reset()
    console.log("Props>>>>>>>",errors)
    if(isEmptyOrNull(newPassword) || isEmptyOrNull(newPassword) || isEmptyOrNull(otp)){ this.setState({msg:'Tidak boleh ada form yang kosong'}) }
    else{ if(newPassword != confirmNewPassword){this.setState({msg:'Password tidak sama'})}else{handleOnSubmit(otp,newPassword)}  }
    
  }
  checkMessage(i,msg)
  {
    console.log("msg>>>>>",msg)
    if(msg == 'Otp expired'){ return Alert.alert('Expired','Sorry your otp expired',[{text: 'Ok', onPress: () =>{this.props.reset(),this.props.navigation.navigate("ScreenForgetPassword")}}],{ cancelable: false })}
    else{return <Text key={i} style={{ color: '#e84a4a', marginTop: 10,textAlign:'center',alignSelf:'center' }}>{msg}</Text>} 
  }

  render () {
    const { errors, isRequest,status } = this.props
    const { msg } = this.state 
    return (
      <Form>
        <Text style={{color:'#36b357',textAlign:'center',marginHorizontal:20,marginBottom:30,fontSize:15,fontWeight:'bold'}}>Otp has been sent to your email. Please do check OTP from your email to reset your password</Text>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input style={{ textAlign: 'center', width: '100%' }} placeholder='OTP' onChangeText={text => this.setState({ otp: text })} secureTextEntry={true} />
        </Item>
        
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input style={{ textAlign: 'center', width: '100%' }} placeholder='New Password'  onChangeText={text => this.setState({ newPassword: text })} secureTextEntry={true}/>
        </Item>
        <Item stackedLabel rounded style={{ width: '100%', margin: 5, alignSelf: 'center' }}>
          <Input style={{ textAlign: 'center', width: '100%' }} placeholder='Confirm New Password' onChangeText={text => this.setState({ confirmNewPassword: text })} secureTextEntry={true}/>
        </Item>
          
        {(!isRequest && !_.isEmpty(errors)) && errors.map((r, i) => this.checkMessage(i,r.message))||<Text style={{ color: '#e84a4a', textAlign: 'center',marginTop:10 }}>{msg}</Text>}
        {!isRequest && (
          <Button block style={{ margin: 15, backgroundColor: 'rgba(218,55,49,1)' }} onPress={this.handleOnPressSubmitForm.bind(this)}>
            <Text>Submit</Text>
          </Button>
        )}
        {isRequest && <Spinner color='green' />}
      </Form>
    )
  }
}


