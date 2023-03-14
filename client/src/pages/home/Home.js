import Slider from '../../components/Slider/Slider'
import BestSellers from '../../layouts/components/BestSellers/BestSellers'
import Contact from '../../layouts/components/Contact/Contact'
 import Kategorien from '../../layouts/components/Kategorien/Kategorien'
import Popular from '../../layouts/components/Popular/Popular'
import './homeStyle.scss'

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <Slider />
            <BestSellers />
            <Popular />
            <Kategorien />
            <Contact />
          </div>
    </div>
  )
}

export default Home
