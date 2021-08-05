import React, { Component } from 'react'
import {
  Container,
  Content,
  Icon,
  Header,
  Body,
  Title,
  Right
} from 'native-base'
import { ImageBackground, StatusBar, Platform, StyleSheet } from 'react-native'
import StyledStatusBar from '../../containers/StyledStatusBar'
// import CardSwipe from './CardSwipe'
import Footer from '../../containers/Footer'
import { Images } from '../../themes'
import UserProfile from './UserProfile'
// import LastTransaction from './LastTransaction'
import { connect } from 'react-redux'
import { NavigationEvents } from 'react-navigation'
import UserProfileActions from '../../containers/UserProfile/redux'
import TransactionListActions from '../../containers/TransactionList/redux'
// import Billing from '../../components/Billing'
import EmoneyActions from '../../features/emoney/redux'
import _ from 'lodash'
import AppConfig from '../../config/AppConfig'
// import Immutable from 'seamless-immutable'

class ScreenHome extends Component {
  componentDidMount () {
    const { fetchUserProfile, userId, emoneyFetchOneByuserid } = this.props
    fetchUserProfile({ userId: userId })
    emoneyFetchOneByuserid({ serviceName: 'getDetailEmoneyByUserId', fields: '_id,type,saldo,transaction_amount,user_id{_id}', whereCondition: { user_id: 'asdfsadffasdfdsf' } })
  }

  async handleOnWillFocus (payload) {
    // fetchUserProfileTrigger = true
    // const { userId, fetchUserProfile, fetchTransactionList } = this.props
    // await fetchUserProfile({ userId: userId })
    // await fetchTransactionList({ user_id: userId })
  }

  render () {
    const { saldo, nickName, userId, email } = this.props
    // console.log('>>>>>>>>>userid : ', userId)
    // console.log('>>>>>>>>>nickname : ', nickName)
    if (!_.isEmpty(userId) && _.isEmpty(email)) {
      // fetchUserProfile({ userId: userId })
      // fetchTransactionList({ user_id: userId })
    }
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Header style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
          <Body>
            <Title style={styles.txtIntro}>{AppConfig.appName}</Title>
          </Body>
          <Right />
          <Icon name='notifications' type='Ionicons' style={{ color: 'white', marginTop: 15 }} />
        </Header>
        <NavigationEvents onWillFocus={this.handleOnWillFocus.bind(this)} />
        <ImageBackground source={Images.backgroundXpay} style={{ flex: 1, width: '100%' }}>
          {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(218,55,49,1)' />}
          {/* {Platform.OS === 'ios' &&
            <StyledStatusBar
              translucent
              backgroundColor='rgba(218,55,49,1)'
              barStyle='light-content'
              StatusBarAnimation='fade'
            />} */}
          <Content>
            <UserProfile navigation={this.props.navigation} saldo={saldo} nickname={nickName} />
            {/* <LastTransaction navigation={this.props.navigation} history={_.slice(_.orderBy(history, ['created_at'], ['desc']), 0, 5)} isRequest={isRequest} nickname={nickName} firstName={firstName} /> */}
            {/* <CardSwipe style={{ margin: 5 }} />
            <Button rounded success style={{ width: 120, alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('ScreenAddCard')}>
              <Icon name='add' style={{ marginRight: 0 }} />
              <Text style={{ paddingLeft: 0, marginLeft: 10 }}>Add Card</Text>
            </Button> */}
            {/* <Billing /> */}
            {/* <Button style={styles.btn_logout} onPress={() => this.props.navigation.navigate('ScreenBeliPulsa')}>
              <Icon name='smartphone' type='MaterialIcons' style={{ alignSelf:'center', marginHorizontal: 5, color:'rgba(218,55,49,1)' }} />
              <Text style={{color:'rgba(218,55,49,1)'}}>Beli Pulsa</Text>
            </Button> */}
          </Content>
        </ImageBackground>
        <Footer tabName='home' />
      </Container>
    )
  }
}

export default connect(
  (state) => ({
    firstName: state.userprofile.firstName,
    email: state.userprofile.email,
    nickName: state.userprofile.nickname,
    profilePic: state.userprofile.profilePic,
    userId: state.session.userId,
    saldo: state.userprofile.saldo,
    history: state.transactionHistory.transactionHistoryList,
    isRequest: state.transactionHistory.isRequest
  }), (dispatch) => ({
    emoneyFetchOneByuserid: (data) => dispatch(EmoneyActions.emoneyFetchOneByuserid(data)),
    fetchUserProfile: (data) => dispatch(UserProfileActions.userprofileFetchUserProfileById(data)),
    fetchTransactionList: (data) => dispatch(TransactionListActions.transactionHistory(data))
  })
)(ScreenHome)

const styles = StyleSheet.create({
  btn_logout: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 50,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black'

  },
  txtIntro: {
    marginLeft: 0,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
})
