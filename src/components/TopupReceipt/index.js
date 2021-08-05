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
  Toast,
  Container
} from 'native-base'
import { Images } from '../../themes'
import { StyleSheet, Image, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { isIphoneX } from '../../lib/helper/platform'


export default class TopupReceipt extends Component {

  render () {
    const { status, errors,trx_amount,trx_id,merchant_name,trx_date,trx_method, merchant_id } = this.props
    let Amount= ('' + trx_amount).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    return (
      <Content style={styles.container}>
          <View style={styles.success_btn}>
            <Icon type="Feather" name="check" color="white" style={styles.icon_success} ></Icon>
          </View>
          <Text style={styles.textMsg}>Top-up Berhasil!</Text>
          <View style={{flexDirection:'row', alignSelf:'center',marginTop:10}}>
            <Text style={styles.textRp}>IDR</Text>
            <Text style={styles.textTot}>{Amount}</Text>
          </View>
          <Text style={styles.textTrx,{opacity:0.6,alignSelf:'center'}}>Transaction ID</Text>
          <Text style={styles.textTrx}>{trx_id}</Text>
          <View style={styles.hr}></View>
          <Text style={{alignSelf:'center',color:'#303030'}}>Merchant</Text>
            <Text style={styles.textMer}>{merchant_name}</Text>
          <View style={styles.hr}></View>
          <View style={styles.details}>
            <Text style={styles.title}>Tanggal & Waktu</Text>
            <Text style={styles.data}>{trx_date}</Text>
          </View>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
  hr:{
    borderBottomColor:'rgba(218,55,49,1)',
    borderBottomWidth:2,
    borderStyle:'dashed',
    borderRadius:1,
    marginVertical:10
  },
  details:{
    alignSelf:'center',
    alignItems:'center',
    marginHorizontal:20,
    flexDirection:'column',
    marginVertical:5
  },
  data:{
    fontWeight:'bold',
    fontSize:25,
    color:'rgba(218,55,49,1)',
  }, 
  title:{
    opacity:0.7,
    fontSize:17,
    color:'rgba(218,55,49,1)',
  },
  textMer:{
    alignSelf:'center',
    color:'rgba(218,55,49,1)',
    fontSize:40,
    marginLeft:10
  },
  textTot:{
    color:'rgba(218,55,49,1)',
    fontSize:60,
    marginLeft:10
  },
  textTrx:{
    color:'rgba(218,55,49,1)',
    fontSize:20,
    alignSelf:'center',
    color:'#303030'
  },
  textRp:{
    color:'rgba(218,55,49,1)',
    fontSize:25,
    marginLeft:10
  },
  textMsg:{
    color:'#303030',
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center'
  },
  icon_success:{
    fontSize:60,
    fontWeight:'bold',
    color:'white'
  },
  success_btn:{
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderWidth:5,
    borderRadius: 150,
    borderColor:'#fff',
    color: '#fff',
    alignSelf:'center',
    backgroundColor: 'rgba(218,55,49,1)',
    // bottom:40
  },
  container: {
    height:'100%',
    flexDirection:'column',
    overflow:'hidden',
    marginHorizontal:10,
    marginVertical:20,
    backgroundColor: 'white',
    borderRadius: isIphoneX ? 1 : 54,
  },
  container2:{
    flexDirection:'row'
  }

})
