import _ from 'lodash'
import moment, { min } from 'moment'

export const timeConverter = (time) => {
  // convert created_at to int
  time = parseInt(time)

  // convert unix time to date
  const day = new Date(time).getUTCDate().toString()
  let month = new Date(time).getUTCMonth() + 1
  month = month.toString()
  const year = new Date(time).getUTCFullYear().toString()

  // const localTime = day + ' ' + month + ' ' + year

  return {
    day,
    month,
    year
  }
}

export const dateConverter = (manipulateTransaction, transaction) => {

  console.log('transaction=', transaction)
  // concat day, month, and year
  const concat = manipulateTransaction.map(t => {
    return { key: t.day + ' ' + t.month + ' ' + t.year }
  })

  // make data uniq for Header
  const uniq = Array.from(new Set(concat.map(u => u.key)))
  console.log('uniq=', uniq)

  // create new array with key and data []
  const newArray = uniq.map(n => {
    return {
      key: n,
      data: []
    }
  })

  console.log('newArray=', newArray)

  // seperate day, month, and year for sorting
  let final = newArray.map(f => {
    const temp = f.key.split(' ')
    return {
      day: parseInt(temp[0]),
      month: parseInt(temp[1]),
      year: parseInt(temp[2]),
      data: f.data
    }
  })

  // add transaction to seperateDataArray
  transaction.map(t => {
    console.log('t=', t)
    final.forEach(f => {
      if (f.day === parseInt(timeConverter(t.created_at).day) && f.month === parseInt(timeConverter(t.created_at).month) && f.year === parseInt(timeConverter(t.created_at).year)) {
        const hour = new Date(parseInt(t.created_at)).getUTCHours()
        const minute = new Date(parseInt(t.created_at)).getUTCMinutes()
        f.data.push({ amount: 'Rp. ' + t.transaction_amount, method: t.transaction_method, merchantName: t.merchant_name, time: hour + ':' + minute, transaction_id: t.transaction_id })
      }
    })
  })

  // sort by year, month, & day
  final = _.orderBy(final, ['year', 'month', 'day'], ['asc', 'asc', 'asc'])

  // change month number to name
  final.forEach(f => {
    f.month = moment().month(f.month - 1).format('MMMM')
  })
  return final
}
