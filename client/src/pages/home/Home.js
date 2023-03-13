import Slider from '../../components/Slider/Slider'
import BestSellers from '../../layouts/components/BestSellers/BestSellers'
import './homeStyle.scss'

function Home() {
  return (
    <div className="home">
        <div className="home-container">
            <Slider />
             <BestSellers />
         </div>
    </div>
  )
}

export default Home
