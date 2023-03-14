import React from 'react'
import './popularStyle.scss'
import { popular } from '../../../assets/images'
import { Link } from 'react-router-dom'


function Popular() {
  return (
    <div className='popular'>
      <div className="popular-container grid">
            {
                popular.map((item, index) => 
                    <Link key={index} className={`item item-${index + 1}`} style={{backgroundImage: `url(${item.img})`}}>
                        <h4>{item.name}</h4>
                    </Link>
                )
            }
      </div>
    </div>
  )
}

export default Popular
