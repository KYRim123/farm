import React from 'react'
import './kategorienStyle.scss'
import { kategorien } from '../../../assets/images'
import { Link } from 'react-router-dom'

function Kategorien() {

    return (
        <div className='kategorien'>
            <h2 className='title wide'>Phân loại</h2>
            <span className="line"></span>
            <div className="kategorien-container grid wide">
                {
                    kategorien.map((item, index) =>
                        <Link className='item' key={index} style={{ backgroundImage: `url(${item.img})` }}>
                            <div className="detail">
                                <h4>{item.name}</h4>
                                <p>{item.total} items</p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default Kategorien
