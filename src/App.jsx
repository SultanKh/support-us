
import './App.scss'
import Header from './components/header/Header'
import Donations from './components/donations/Donations'
import Footer from './components/footer/Footer'
import AttackHamas from './components/attack-hamas/AttackHamas'
import DonationPay from './components/donation-pay/DonationPay'
function App() {

  return (
    <>
    <Header />
      <Donations />
      {/* <DonationPay /> */}
      <Footer />
      {/* <AttackHamas /> */}
    </>
  )
}

export default App
