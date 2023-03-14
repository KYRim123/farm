import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import './layoutDefault.scss'

function LayoutDefault({ children }) {
  return <div>
    <Header/>
    {children}
    <Footer/>
  </div>
}

export default LayoutDefault
