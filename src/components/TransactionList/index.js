import React, { Component } from 'react'
import {
  View,
  SectionList,
  StyleSheet,
  Text
} from 'react-native'

export default class index extends Component {
  render () {
    return (
      <View>
        <SectionList
          style={{ overflow: 'hidden' }}
          sections={this.props.data}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.transactionBox}>
                  <View style={styles.itemMethod}>
                    <Text style={[styles.textMethodName, { fontSize: 12, fontWeight: 'bold' }]}>{item.merchantName}</Text>
                    <Text style={[styles.textMethodName]}>{item.method}</Text>
                    <Text style={styles.trxId}>{'TRX ID: ' + item.transaction_id}</Text>
                  </View>
                  <View style={styles.column2}>
                    <Text style={[styles.textMethodName, {}]}>{item.time}</Text>
                    <Text style={styles.itemAmount}>{item.amount}</Text>
                  </View>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'rgba(247,247,247,1.0)', marginHorizontal: 12 }} />
              </View>
            )
          }}
          renderSectionHeader={({ section }) => {
            return (
              <View>
                <Text style={styles.sectionHeader}>{section.day + ' ' + section.month + ' ' + section.year}</Text>
              </View>
            )
          }}
          keyExtractor={(content, index) => content + index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  trxId: {
    paddingTop: 6,
    paddingBottom: 6,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#78909c'
  },
  sectionHeader: {
    paddingTop: 6,
    paddingLeft: 14,
    paddingBottom: 6,
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    color: '#78909c'
  },
  transactionBox: {
    flexDirection: 'row',
    // paddingTop: 4,
    // paddingBottom: 4,
    // backgroundColor: 'yellow',
    flex: 1,
    padding: 5
  },
  itemMethod: {
    // paddingLeft: 14,
    fontSize: 12,
    // height: 44,
    fontWeight: 'bold',
    // paddingVertical: 4,
    // flexDirection: 'column',
    // marginRight: 'auto',
    // backgroundColor: 'blue',
    alignSelf: 'center'
  },
  column2: {
    paddingLeft: 5,
    fontWeight: 'bold',
    // paddingVertical: 4,
    flexDirection: 'column',
    // marginRight: 'auto',
    position: 'absolute',
    // backgroundColor: 'purple',
    right: 0,
    width: 130,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
    // alignSelf: 'flex-end'
  },
  itemAmount: {
    // paddingTop: 14,
    // paddingBottom: 12,
    // paddingRight: 14,
    // fontSize: 14,
    // height: 44,
    // marginLeft: 'auto',
    // width: 100,
    // textAlign: 'right'
  },
  textMethodName: {
    fontSize: 10
  }
})
