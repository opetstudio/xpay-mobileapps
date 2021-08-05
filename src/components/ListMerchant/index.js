import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { StyleSheet, View, Image, Text, ImageBackground } from 'react-native'
import { Content, Icon, Card, CardItem, Left, Body, Right } from 'native-base'
import { isIphoneX } from '../../lib/helper/platform'
import { Images } from '../../themes'
// import { path } from 'ramda'
import ViewPager from '@react-native-community/viewpager'
import AppConfig from '../../config/AppConfig'

export default class ListMerchant extends Component {
  state={
    swipe_paging: 2
    // isMinimize:false,
    // isMinIcon:'chevron-up'
  }

  render () {
    const dataCard = [
      { id: 1, imgSource: Images.defaultBannerPutih }
      // { id: 2, imgSource: Images.bannerMerchant2 },
      // { id: 3, imgSource: Images.bannerMerchant3 }
    ]
    // const { business_name, status, errors, trx_amount, trx_id, merchant_name, trx_date, trx_method } = this.props
    // const dataMerchant = [
    //   { id: 1, imgSource: Images.bannerEm,title: merchant_name },
    //   { id: 2, imgSource: Images.bannerPa,title:'Warung Pak slamet' },
    // ]

    console.log('value ', this.state.swipe_paging)
    if (this.state.swipe_paging < 0) { this.setState({ swipe_paging: dataCard.length }) }
    if (this.state.swipe_paging > (dataCard.length) - 1) { this.setState({ swipe_paging: dataCard.length - dataCard.length }) }
    return (
      <Content style={styles.container}>
        {!this.state.isMinimize &&
          <View style={styles.subView}>
            <ViewPager style={{ flex: 1, marginTop: 20 }} initialPage={this.setState.swipe_paging} render>
              {
                dataCard.map(r => (
                  <View key={r.id}>
                    <View style={{ flex: 1 }}>
                      <Image source={r.imgSource} style={{ flex: 1, resizeMode: 'contain', width: '100%' }} />
                    </View>
                  </View>
                ))
              }
            </ViewPager>
            {/* <View style={{marginTop:5,flexDirection:'row',alignItems:'center',alignSelf:'center'}}>
                  <Icon type="Feather" name="chevron-left" style={{marginRight:20,color:'white',fontSize:17}} onPress={()=> this.setState({swipe_paging:this.state.swipe_paging-1})}></Icon>
                  <Text style={styles.paging}>{ this.state.swipe_paging > dataCard.length ? this.state.swipe_paging-1 : this.state.swipe_paging+1}/{dataCard.length}</Text>
                  <Icon type="Feather" name="chevron-right" style={{marginLeft:20,color:'white',fontSize:17}} onPress={()=> this.setState({swipe_paging:this.state.swipe_paging+1})}></Icon>
                </View> */}
          </View>}
        <View>
          <Text style={styles.title}>{AppConfig.appName} merchants</Text>
          {/* <Icon type="Feather" name={this.state.isMinIcon} style={{alignSelf:'center',textAlign:'center',color:'rgba(218,55,49,1)',fontSize:25,fontWeight:'bold'}} onPress={()=>this.state.isMinimize ? this.setState({isMinimize:false,isMinIcon:'chevron-up'}) : this.setState({isMinimize:true,isMinIcon:'chevron-down'}) }></Icon> */}
        </View>
        <ImageBackground resizeMode='stretch' style={{ flex: 1 }} source={Images.backgroundXpay}>
          {(this.props.dataMerchant || []).map((r, i) => (
            <Card key={i} style={{ elevatixon: 3 }}>
              <CardItem cardBody>
                {i % 2 == 0 && <Image source={Images.defaultBanner} style={{ height: 200, width: null, flex: 1 }} />}
                {i % 2 == 1 && <Image source={Images.defaultBannerPutih} style={{ height: 200, width: null, flex: 1 }} />}
              </CardItem>
              <CardItem style={{ backgroundColor: 'rgba(218,55,49,1)' }}>
                <Left>
                  <Body>
                    <Text style={styles.titleMer}>{r.business_name}</Text>
                  </Body>
                </Left>
                <Right>
                  <View style={{ flexDirection: 'row' }}>
                    <Icon type='MaterialIcons' name='grade' style={{ marginHorizontal: 3, fontSize: 17, color: 'yellow' }} />
                    <Icon type='MaterialIcons' name='grade' style={{ marginHorizontal: 3, fontSize: 17, color: 'yellow' }} />
                    <Icon type='MaterialIcons' name='grade' style={{ marginHorizontal: 3, fontSize: 17, color: 'yellow' }} />
                  </View>
                </Right>
              </CardItem>
            </Card>))}

        </ImageBackground>
      </Content>

    )
  }
}

const styles = StyleSheet.create({

  merchantTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5
  },
  cardBody: {
    backgroundColor: '#f2f2f2',
    marginTop: 5
  },
  paging: {
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    fontSize: 15
  },
  titleMer: {
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
    fontSize: 20,
    opacity: 0.7
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20
  },
  inputSearch: {
    borderRadius: isIphoneX ? 20 : 70,
    backgroundColor: 'white',
    marginHorizontal: 10,
    width: '100%'
  },
  icoSearch: {
    marginLeft: 5,
    marginRight: 10,
    fontSize: 40
  },
  subView: {
    height: 250,
    backgroundColor: 'rgba(218,55,49,1)'
  },
  container: {
    overflow: 'visible',
    flex: 1,
    flexDirection: 'column',
    marginTop: -30
  }
})
