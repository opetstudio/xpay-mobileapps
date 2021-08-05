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
  Container,
  SafeAreaView
} from 'native-base'
import { Images } from '../../themes'
import { StyleSheet, Image, View, ScrollView, Keyboard } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { isIphoneX } from '../../lib/helper/platform'



export default class PaymentTransactionDetail extends Component {
  render () {
    const { trx_amount,trx_id,merchant_name,trx_date,trx_method,trx_status,merchant_id } = this.props
    let amount= ('' + trx_amount).replace(/(.)(?=(\d{3})+$)/g, '$1,')
    return (
      <ScrollView>
        <View style={{flexDirection:'row',marginVertical:10}}>
          <Image style={{resizeMode:'contain',width:50,height:50}} resizeMode="stretch" source={Images.merChant}/>                 
          <View style={{flexDirection:'column',flex:1,alignItems:'stretch'}}>
            <Text style={styles.txtMerchant}>{merchant_name}</Text>
            <Text style={styles.txtMerchantID}>Merchant ID: {merchant_id}</Text>  
          </View>
        </View> 
        <View style={{flexDirection:'row'}}>
        <Text style={styles.bigRp}>Status </Text>
          <View style={{flexDirection:'column',flex:1,marginVertical:10}}>
            <Text style={{backgroundColor:trx_status.status_trx_color||'#000',padding:5,paddingHorizontal:8,fontSize:20,color:'white'||'#000',alignSelf:"flex-end",textAlign:'right',borderRadius:30}}>{trx_status.status_trx_text}</Text>
          </View>
        </View>
        <Item style={styles.hr}></Item>
        <View style={{flexDirection:'column',flex:1,alignItems:'stretch',marginVertical:10}}>
          <Text style={styles.bigRp}>Total</Text>
          <Text style={{fontSize:35,fontWeight:'bold',textAlign:'right',color:trx_status.status_trx_color}} >IDR {amount}</Text>
        </View>
        <Item style={styles.hr}></Item>
        <View style={styles.container}>
          <Text style={styles.biglabel}>Detail</Text>
          <Item stackedLabel >
            <Label>Metode Pembayaran</Label>
            <Input disabled={true} value={trx_method} onFocus={Keyboard.dismiss()}/>
          </Item>
          <Item stackedLabel >
            <Label>ID Transaksi</Label>
            <Input disabled={true} value={trx_id}  onFocus={Keyboard.dismiss()}/>
          </Item>
          <Item stackedLabel >
            <Label>Tanggal Transaksi</Label>
            <Input disabled={true} value={trx_date}  onFocus={Keyboard.dismiss()}/>
          </Item>
          <Item stackedLabel >
            <Label>Jumlah</Label>
            <Input disabled={true} value={'IDR '+amount.toString()} onFocus={Keyboard.dismiss()} style={{color:trx_status.status_trx_color,fontWeight:'bold',fontSize:25}}/>
          </Item>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  hr:{
    opacity:0.2,
    borderBottomColor:'#303030',
    borderBottomWidth:2,
    borderStyle:'dashed',
    borderRadius:1
  },
  txtMerchantID:{
    opacity:0.5,
    textAlign:'right',
    alignSelf:'flex-end',
    fontSize:20,
  },
  txtMerchant:{
    textAlign:'right',
    alignSelf:'flex-end',
    fontSize:30,
    fontWeight:'bold'
  },
  bigRpValue: {
    fontSize:35,
    fontWeight:'bold',
    textAlign:'right'
  },
  bigRp: {
    opacity:0.7,
    fontSize:20,
  }, 
  biglabel: {
    marginBottom:25,
    fontSize:25,
    fontWeight:'bold',
  }, 
  container: {
    flex:1,
    margin:10,
    flexDirection:'column',
    backgroundColor: 'white'
  }
})
