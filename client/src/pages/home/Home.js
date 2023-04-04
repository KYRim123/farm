import { useEffect } from 'react'
import './homeStyle.scss'

import Slider from '../../components/Slider/Slider'
import BestSellers from '../../layouts/components/BestSellers/BestSellers'
import Categories from '../../layouts/components/Categories/Categories'
import Popular from '../../layouts/components/Popular/Popular'
import {useDispatch} from 'react-redux'

import * as action from '../../redux/action'

function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getQtyCart.getQtyCartRequest())
  }, [dispatch])
  
  return (
    <div className="home">
        <div className="home-container">
            <Slider />
            <BestSellers />
            <Popular />
            <Categories />
          </div>
    </div>
  )
}

export default Home
