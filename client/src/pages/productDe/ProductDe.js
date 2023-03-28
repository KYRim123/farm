import React, { useEffect, useState } from 'react'
import { RxMinus } from 'react-icons/rx'
import { RiAddFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import {Link, useSearchParams} from 'react-router-dom'
import {fetchProductsDetail} from '../../assets/API'
import './productDeStyle.scss'

function ProductDe() {
    const [total, setTotal] = useState(1)
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({})
    const minus = () => {
        total > 1 ? setTotal(total => total - 1) : setTotal(1)
    }

    const addTotal = () => {
        setTotal(total => total + 1)
    }

    useEffect(() => {
        const idProduct = searchParams.get('id')
        fetchProductsDetail(idProduct)
            .then(res => setData(res.data))
            .catch(() => console.log("fetch product is failure!"))
    }, [])

    return (
        data && <div className='productDetail'>
            <div className="wrapper wide">
                <div className="product flex">
                    <div className="show-img">
                        <img src={data.image} alt="img" className="img-main" />
                        <div className="img-others">
                            <img className='active' src={data.image} alt="img" />
                            <img src={data.image} alt="img" />
                            <img src={data.image} alt="img" />
                        </div>
                    </div>

                    <div className="information">
                        <span>plant</span>
                        <h3 className="title">{data.name}</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the
                        </p>
                        <div className='flex' style={{ alignItems: 'center' }}>
                            <div className="price-new">$ {data.priceNew}.00</div>
                            <div className='discount'>50%</div>
                        </div>
                        <div className="price-old">$250.00</div>
                        <div className="total flex">
                            <div onClick={() => { minus() }}><RxMinus className='icon'/></div>
                            <span>{total}</span>
                            <div onClick={() => { addTotal() }}><RiAddFill className='icon'/></div>
                        </div>
                    </div>
                </div>

                <div className="detail">
                    <div className="description">
                        <h4 className="title">Mô tả</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled i
                        </p>
                    </div>
                    <div className="about">
                        <h4 className="title">khác</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled i
                        </p>
                    </div>
                    <div className="evaluate">
                        <div className="wrapper flex" style={{alignItems: 'center'}}>
                            <img src={data.image} alt="" />
                            <div className="star">
                                <div className="star-5 start__item">
                                    <span>5</span>
                                    <AiFillStar className='icon'/>
                                    <span>(199)</span>
                                    
                                </div>
                                <div className="star-4 start__item">
                                    <span>4</span>
                                    <AiFillStar className='icon'/>
                                    <span>(99)</span>
                                    
                                </div>
                                <div className="star-3 start__item">
                                    <span>3</span>
                                    <AiFillStar className='icon'/>
                                    <span>(19)</span>
                                     
                                </div>
                                <div className="star-2 start__item">
                                    <span>2</span>
                                    <AiFillStar className='icon'/>
                                    <span>(9)</span>
                                    
                                </div>
                                <div className="star-1 start__item">
                                    <span>1</span>
                                    <AiFillStar className='icon'/>
                                    <span>(1)</span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button2"> Viết Đánh giá Sản Phẩm</div>
                    <h5 className="title title--comment" style={{paddingTop: '3rem'}}>Bình Luận</h5>
                    <ul className="comment">
                        <li className="comment__item">
                            <Link className="user flex">
                                <h4 className="name">Aman gupta</h4>
                                <div className="start">
                                    <AiFillStar className='icon'/>
                                    <AiFillStar className='icon'/>
                                    <AiFillStar className='icon'/>
                                    <AiFillStar className='icon'/>
                                    <AiFillStar className='icon'/>
                                </div>
                            </Link>
                            <p>I've been using this cleanser for about five or six months now and my acne
                                is almost completely gone. I really struggled for years with my skin and tried
                                everything possible but this is the only thing that managed to clear up my
                                skin. 100% recommend and will continue to use is for sure.</p>
                        </li>
                    </ul>
                    <div className="button2">Xem tất cả</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDe
