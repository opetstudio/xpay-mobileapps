import React, { Component } from 'react'
import {
  Content,
  Button,
  Item,
  Input,
  Form,
  Label,
  Text,
  Icon,
  Textarea,
  Toast
} from 'native-base'
import { Images } from '../../themes'
import { StyleSheet, Image, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class UserEditProfile extends Component {
  state={
    photo: { uri: null },
    firstName: '',
    lastName: '',
    address: '',
    password: '',
    nickname: ''
  }

  _ChoosePhoto () {
    const options = {}
    ImagePicker.launchImageLibrary(options, response => {
      console.log('image response ===>', response)
      if (response.uri) {
        this.setState({ photo: response })
      }
    })
  }

  handleSubmit () {
    const { handleOnSubmit } = this.props
    console.log('state===>', this.state)
    const { firstName, lastName, address, password, userId, nickname } = this.state
    handleOnSubmit({ firstName, lastName, address, password, userId, nickname })
  }

  componentDidMount () {
    const { firstName, address, lastName, userId, nickname } = this.props
    this.setState({ firstName, address, lastName, userId, nickname })
  }

  render () {
    const { status, errors,profilePicture } = this.props
    const { firstName, address, lastName, nickname } = this.state
    return (
      <Content>
        <View style={{ alignSelf: 'center', marginTop: 20 }}>
          <Image source={profilePicture ? { uri: profilePicture } : Images.dafultUser} style={styles.image} />
          <Icon name='camera' type='Feather' style={styles.uploadImage} button onPress={this._ChoosePhoto.bind(this)} />
        </View>
        <Form>
          <Item stackedLabel style={{ marginTop: 20, marginRight: 15 }}>
            <Label>Nama Tengah</Label>
            <Input onChangeText={(e) => this.setState({ nickname: e })} value={nickname} />
          </Item>

          <Item stackedLabel style={{ marginTop: 20, marginRight: 15 }}>
            <Label>Nama Depan</Label>
            <Input onChangeText={(e) => this.setState({ firstName: e })} value={firstName} />
          </Item>

          <Item stackedLabel style={{ marginTop: 10, marginRight: 15 }}>
            <Label>Nama Belakang</Label>
            <Input onChangeText={(e) => this.setState({ lastName: e })} value={lastName} />
          </Item>
          <Label style={{ marginTop: 20, fontSize: 15, marginLeft: 15, color: '#6b6a6a' }}>Alamat</Label>
          <Textarea style={{ marginHorizontal: 15 }} rowSpan={5} bordered onChangeText={(e) => this.setState({ address: e })}>{address}</Textarea>
          <Item stackedLabel rounded style={{ marginTop: 30,alignSelf: 'center', marginLeft: 15, marginRight: 15 }} >
            <Input rounded onChangeText={(e) => this.setState({ password: e })} placeholder='Password' placeholderTextColor='#d3d3d3'  secureTextEntry style={{ textAlign: 'center' }} />
          </Item>
          
          {status === 400 && errors.map((r, i) => (<Text style={{ color: 'red', textAlign: 'center' }} key={i}>{r.message}</Text>))}
          {status === 200 && <Text style={{ color: 'green', textAlign: 'center' }}>Success update profile</Text>}

          <Button  rounded block style={{ margin: 30 ,marginTop: 15, backgroundColor:'rgba(218,55,49,1)'}} onPress={this.handleSubmit.bind(this)}>
            <Text style={{alignSelf:'center'}}>Submit</Text>
          </Button>
        </Form>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  form: {
    marginTop: 10
  },
  image: {
    width: 103,
    height: 103,
    backgroundColor: '#CCC',
    borderRadius: 100,
    margin: 10
  },
  uploadImage: {
    color:'white',
    right: 0,
    bottom: 0,
    position: 'absolute',
    padding: 10,
    alignSelf: 'center',
    fontSize: 20,
    backgroundColor: '#383838',
    borderRadius: 150
  },
  messageFrame: {
    // borderColor: 'black',
    // borderWidth: 2,
  },
  errorMessage: {
    color: 'red',
    color:'white', 
    backgroundColor:'red', 
    padding:5,
    marginHorizontal:6,
    marginVertical:10,
    textAlign:'center'
  }
})
