import Header from '../components/Header/Header'
import './layoutDefault.scss'

function LayoutDefault({ children }) {
  return <div>
    <Header/>
    {children}
  </div>
}

export default LayoutDefault
