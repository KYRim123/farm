import Slider from '../../components/Slider/Slider'
import BestSellers from '../../layouts/components/BestSellers/BestSellers'
import Popular from '../../layouts/components/Popular/Popular'
import './homeStyle.scss'

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <Slider />
            <BestSellers />
            <Popular />
         </div>
    </div>
  )
}

export default Home
