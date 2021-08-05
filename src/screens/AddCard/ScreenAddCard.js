import React, { Component } from 'react'
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Title,
  Body,
  Right,
  Text,
  Icon,
  Segment,
  Card,
  CardItem,
  Thumbnail
} from 'native-base'
import { ImageBackground, View, Dimensions, Image } from 'react-native'
import { Grid, Row } from 'react-native-easy-grid'
import Footer from '../../containers/Footer'
import { Images, Metrics, Colors } from '../../themes'
import FormAddCard from './FormAddCard'

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  backgroundImg: {
    flex: 1,
    width: Metrics.screenWidth
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
}
const deviceWidth = Dimensions.get("window").width;
const logo = Images.logo
const cardImage = Images.drawerCover

class ScreenAddCard extends Component {
  render () {
    return (
      <Container style={styles.container}>
        <ImageBackground source={Images.backgroundXpay} style={{ width: '100%', height: '100%' }}>
          <Header
            rounded
            iosBarStyle='light-content'
          >
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Add Card</Title>
            </Body>
            <Right />
          </Header>
          {/* <Row style={{backgroundColor: 'yellow'}} /> */}
          <Content contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding: 10 }}>
            <FormAddCard
              onSuccessSubmit={() => {
                console.log('onSuccessSubmit=====')
                this.props.navigation.replace('ScreenOtpValidation')
              }}
            />
          </Content>


          {/* </Content> */}
        </ImageBackground>
      </Container>
    )
  }
}

export default ScreenAddCard
