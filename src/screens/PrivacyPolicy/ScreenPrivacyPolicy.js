
import React from 'react'
import { View, StyleSheet, Alert, ImageBackground, Image, StatusBar } from 'react-native'
import { Header, Button, Text, Left, Right, Icon, Body, Title, Container, Form, Input, Item, Content } from 'native-base'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Images, Colors, Metrics } from '../../themes'


export default class PrivacyPolicy extends React.Component {
  render () {
    return (
      <Container>
          
          <Header style={{ backgroundColor:'rgba(218,55,49,1)' }}>
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
              </Button>
            </Left>
            <Body>
              <Title>Privacy Policy</Title>
            </Body>
            <Right />
          </Header>
          {Platform.OS === 'android' && <StatusBar barStyle='light-content' backgroundColor='rgba(195,40,34,1)' />}
          {Platform.OS === 'ios' &&
          <StyledStatusBar
            translucent
            backgroundColor='rgba(195,40,34,1)'
            barStyle='light-content'
            StatusBarAnimation='fade'
          />}
          <Content>
           <Text style={{ alignSelf: 'center' ,margin: 15, fontWeight: 'bold',}}>KEBIJAKAN PRIVASI</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>Kebijakan Privasi berikut ini menjelaskan bagaimana kami PT EREVNA RAYA TEKNOLOGI mengumpulkan, menggunakan, mengungkapkan dan melindungi data pribadi Pengguna termasuk informasi atas identitas pribadi dan informasi lain yang telah Anda kirimkan kepada kami saat pengguna mengakses dan menggunakan Layanan dari aplikasi Rayapay.</Text>
           <Text style={{ textAlign:'justify' ,margin: 15, fontWeight: 'bold',}}>1. DATA PRIBADI YANG DIKUMPULKAN.</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>Kami mengumpulkan dan menyimpan data pribadi ketika pengguna menggunakan laman kami dan data pribadi yang kami kumpulkan adalah :</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>- Saat Pengguna menggunakan layanan kami dan membuat akun aplikasi Rayapay maka Pengguna akan memberikan data pribadi berupa nama, alamat, nomor telepon, tanggal lahir, email yang selanjutnya akan dijadikan sebagai ID Pengguna.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Saat Pengguna mendaftarkan akun kami juga mengumpulkan informasi dari kemputer anda termasuk informasi demografis, alamat IP, versi browser/platform, sistem operasi, sumber rujukan, periode kunjungan, tampilan halaman, (informasi perangkat) digunakan untuk meningkatkan kinerja serta kemanan platform.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Informasi yang didapatkan saat Pengguna mengakses layanan dari aplikasi Rayapay juga termasuk informasi rekening Pengguna berupa nama pemegang rekening, nomor kartu kredit/debit serta masa berlaku, data transaksi dan tagihan.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Informasi Pihak Ketiga. Selain kami mngumpulkan informasi secara otomatis, kami juga mengumpulkan data dan informasi Pengguna melalui sumber data Pihak Ketiga yang digunakan dalam proses penyediaan Layanan aplikasi Rayapay.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15, fontWeight: 'bold',}}>2. PENGGUNAAN DATA PRIBADI.</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>Kami dapat menggunakan keseluruhan data pribadi pengguna sebagai acuan untuk penyediaan Layanan aplikasi Rayapay antara lain sebagai berikut :</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>- Untuk memungkinkan kelayakan verifikasi Pengguna untuk keperluan dalam pemberian layanan serta fitur-fitur dalam layanan aplikasi Rayapay Kami.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Kami menggunakan informasi Pengguna untuk keperluan pendaftaran serta mengelola dan mengawasi akun untuk memenuhi kebutuhan Pengguna.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Untuk mengolah dan menyediakan layanan yang Anda minta termasuk transaksi pembayaran serta pemberitahuan transaksi-transaksi yang dilakukan.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Untuk berkomunikasi dengan Anda, menanggapi pertanyaan, saran dan tuntutan sehubungan dengan pengunaan Layanan aplikasi Rayapay.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Untuk memberitahukan penawaran-penawaran atau promosi khusus dari kami, iklan, voucher, juga fungsi-fungsi terbaru dari aplikasi Rayapay.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Melakukan pengecekan ,mencegah atau menangani penipuan atau pelangaran-pelanggaran atas syarat dan ketentuan lain-nya yang illegal serta dapat menimbulkan kerugian bagi Kami maupun Pengguna.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Melakukan pengungkapan berdasarkan peraturan perundang-undangan untuk menghadapi setiap gugatan dan melakukan pemeriksaan audit juga penyelidikan. Pengungkapan data dapat dilakukan dengan peraturan atau proses hukum yang berlaku di negara masing-masing.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15, fontWeight: 'bold',}}>3. DATA PRIBADI YANG DIBAGIKAN.</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>Kami memerlukan Data Pribadi Anda untuk diberikan kepada pihak-pihak dibawah ini, sewaktu-waktu untuk tujuan lain yang diizinkan sesuai dengan aturan dan ketentuan yang berlaku serta pemberitahuan khusus pada saat pengumpulan data yang sudah disetujui oleh Pengguna.</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>- Kelompok usaha dan pihak yang terkait dengan kami, mitra usaha baik perusahaan, organisasi, dan pihak lainnya yang bekerja sama dalam menjalankan bisinis.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Sistem pembayaran yang di gunakan dalam Layanan aplikasi Rayapay.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Penyedia jasa, konsultan, Lembaga riset, rekan pemasaran.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Pihak ketiga yang bekerja sama dalam menyediakan layanan termasuk agen, kontraktor, vendor atau pihak lainya yang melakukan tugas atas nama Kami melalui cara-cara yang diizinkan dalam peraturan dan hukum dalam negara.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Lembaga penegak hukum dan konsultan hukum, pejabat penegak hukum, otoritas pemerintah untuk memenuhi tujuan hukum apabila terjadi suatu hal dalam keadaan darurat yang dapat menimbulkan kerugian.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Instansi pemerintah, Bank Indonesia, Otoritas Jasa Keuangan dan pusat laporan yang di atur dalam Hukum dan diwajibkan memberikan informasi secara berkala sesuai peraturan perundang-undangan yang berlaku.</Text>

           <Text style={{ textAlign:'justify' ,margin: 15}}>- Berbagi informasi dengan afiliasi dengan maksud membantu dalam menyediakan layanan Kami untuk mengoperasikan bisnis yang menurut kebijakan Kami untuk memenuhi kebutuhan pengguna sesuai dengan ketentuan dan Peraturan yang berklaku.</Text>
           
           <Text style={{ textAlign:'justify' ,margin: 15}}>Kami melakukan seleksi yang hati-hati atas pembagian informasi yang Kami bagikan. Seluruh pihak penyedia layanan atau semua pihak yang bekerja sama dengan kami terikat oleh perjanjian untuk menjaga keamanan Pengguna dan menggunakannya hanya sesuai dengan izin dan peraturan yang sesuai dengan hukum yang berlaku di Indonesia.</Text>
          
           <Text style={{ textAlign:'justify' ,margin: 15, fontWeight: 'bold',}}>PERUBAHAN KEBIJAKAN PRIVASI</Text>
           <Text style={{ textAlign:'justify' ,margin: 15}}>Perusahaan kami akan merubah Kebijakan Privasi ini untuk kebutuhan yang memang diperlukan dengan tujuan untuk melayani Pengguna agar lebih efektif serta pembertiahuan kepada Pengguna terhadap Kebijakan yang dirubah.</Text>
        </Content>
        
      </Container>
    )
  }
}

// // REDUX CONNECTION
// export default connect(
//   (state, ownProps) => ({
//     isLoggedIn: SessionSelectors.isLoggedIn(state.session),
//     sessionToken: SessionSelectors.sessionToken(state.session),
//     sessionLoginMSG: SessionSelectors.sessionLoginMSG(state.session)
//   }),
//   dispatch => ({
//     loginRequest: data => dispatch(SessionAction.sessionLogin(data))
//   })
// )(ScreenLogin)
