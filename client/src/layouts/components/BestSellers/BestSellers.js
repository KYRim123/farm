import React from 'react'
import './bestSellersStyle.scss'
import { bestSellers } from '../../../assets/images'
import {Link} from 'react-router-dom'



function BestSellers() {
  return (
    <div className='bestSellers'>
        <h2 className="title wide">bán chạy nhất</h2>
        <span className="line"></span>
        <div className="bestSellers-container">
            <ul className='wide'>
                {
                  bestSellers.map((item, index) => 
                    <li key={index}>
                      <Link href="/">
                        <img src={item.img} alt="imgBest" />
                        <h4>{item.name}</h4>
                        <div className='price'>
                          <span className='price-new'>${item.priceNew}</span>
                          <span className='price-old'>${item.priceOld}</span>
                        </div>
                      </Link>
                    </li>
                  )
                }
            </ul>
        </div>
    </div>
  )
}

export default BestSellers
