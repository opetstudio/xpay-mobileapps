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
  Label,
  Icon
} from 'native-base'
import { Colors } from '../../themes'
import _ from 'lodash'
import { is, isEmpty } from 'ramda'
import { isEmptyOrNull } from '../../lib/Utils'

export default class ForgetPassword extends Component {
  state={
    email:'',
    msg:''
  }
  handleOnPressSubmitForm () {
    const { handleOnSubmit,isRequest,status } = this.props
    const { email,msg } = this.state
    console.log("Props>>>>>>>",this.props)
    
    console.log("email.",email)
    if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
    { handleOnSubmit(email) }
    else{ 
      if(isEmptyOrNull(email)) this.setState({msg:'Form email tidak boleh kosong'}); else this.setState({msg:'Email tidak valid'}); 
    }

  }  
  render () {
    const { errors,status, isRequest } = this.props
    const { email,msg } = this.state 
    console.log("msg>>>>>>>",msg) 
    return (
      <Form>
        <Text style={{textAlign:'center',alignSelf:'center',marginBottom:30,opacity:0.5}}>If you have forgotten your password you can reset it here</Text>
        <Text style={{ alignSelf: 'center'}}>Email</Text>
        <Item fixedLabel >
        <Icon style={{alignSelf:'center'}} type="FontAwesome" name=""></Icon>
          {/* <Label floatingLabel>Email or Phone Number</Label> */}
          <Input style={{ textAlign: 'center' }} placeholder='your registered email' placeholderTextColor='#d3d3d3' onChangeText={text => this.setState({ email: text })} />
        </Item>
        <Text style={{ color: 'red', textAlign: 'center',textAlign:'center' }}>{msg}</Text>
        {(!isRequest && !_.isEmpty(errors)) && errors.map((r, i) => <Text key={i} style={{ color: 'red', fontSize: 13, marginBottom: 10,textAlign:'center' }}>{r.message}</Text>)}
        {!isRequest && (
          <Button block style={{ margin: 15,  backgroundColor:'rgba(218,55,49,1)' }} onPress={this.handleOnPressSubmitForm.bind(this)}>
            <Text>Submit</Text>
          </Button>
        )}
        {isRequest && <Spinner color='green' />}
      </Form>
    )
  }
}
