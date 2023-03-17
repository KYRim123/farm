import Footer from '../components/Footer/Footer'
import Contact from '../../layouts/components/Contact/Contact'
import Header from '../components/Header/Header'
import './layoutDefault.scss'

function LayoutDefault({ children }) {
  return <div>
    <Header/>
    {children}
    <Contact />
    <Footer/>
  </div>
}

export default LayoutDefault
