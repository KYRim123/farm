import React from 'react'
import './categoriesStyle.scss'
import { categories } from '../../../assets/images'
import { Link } from 'react-router-dom'

function Categories() {

    return (
        <div className='categories'>
            <h2 className='title wide'>Phân loại</h2>
            <span className="line"></span>
            <div className="categories-container grid wide">
                {
                    categories.map((item, index) =>
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

export default Categories
