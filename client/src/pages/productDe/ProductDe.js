import React, {useState } from 'react'
import { RxMinus } from 'react-icons/rx'
import { RiAddFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import './productDeStyle.scss'

function ProductDe() {
    const [total, setTotal] = useState(1)

    const minus = () => {
        total > 1 ? setTotal(total => total - 1) : setTotal(1)
    }

    const addTotal = () => {
        total >= 1 ? setTotal(total => total + 1) : console.log('add total');
    }

    console.log(total);
    return (
        <div className='productDetail'>
            <div className="wrapper wide">
                <div className="product flex">
                    <div className="show-img">
                        <img src="https://res.cloudinary.com/decuwkb48/image/upload/v1679059411/products/img5_kkb68f.png" alt="img" className="img-main" />
                        <div className="img-others">
                            <img src="https://res.cloudinary.com/decuwkb48/image/upload/v1679059411/products/img5_kkb68f.png" alt="img" />
                            <img src="https://res.cloudinary.com/decuwkb48/image/upload/v1679059411/products/img5_kkb68f.png" alt="img" />
                            <img src="https://res.cloudinary.com/decuwkb48/image/upload/v1679059411/products/img5_kkb68f.png" alt="img" />
                        </div>
                    </div>

                    <div className="information">
                        <span>plant</span>
                        <h3 className="title">Chậu trồng cây vuông 0,27 đến 2 lít</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the
                        </p>
                        <div className="price-new">$125.00</div>
                        <div className='discount'>50%</div>
                        <div className="price-old">$250.00</div>
                        <div className="flex">
                            <div className="total">
                                <div onClick={() => { minus() }}><RxMinus /></div>
                                <span>{total}</span>
                                <div onClick={() => { addTotal() }}><RiAddFill /></div>
                            </div>
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
                        <div className="wrapper">
                            <img src="https://res.cloudinary.com/decuwkb48/image/upload/v1679059411/products/img5_kkb68f.png" alt="" />
                            <div className="star">
                                <div className="star-5">
                                    1 <AiFillStar />(199)
                                </div>
                                <div className="star-4">
                                    1 <AiFillStar />(99)
                                </div>
                                <div className="star-3">
                                    1 <AiFillStar /> (19)
                                </div>
                                <div className="star-2">
                                    1 <AiFillStar />(9)
                                </div>
                                <div className="star-1">
                                    1 <AiFillStar />(1)
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button2">Đánh giá</div>
                    <h5 className="title">Bình Luận</h5>
                    <ul className="comment">
                        <li className="comment__item">
                            <div className="name">Aman gupta</div>
                            <div className="start">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p>I've been using this cleanser for about five or six months now and my acne
                                is almost completely gone. I really struggled for years with my skin and tried
                                everything possible but this is the only thing that managed to clear up my
                                skin. 100% recommend and will continue to use is for sure.</p>
                        </li>
                        <li className="comment__item">
                            <div className="name">Aman gupta</div>
                            <div className="start">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p>I've been using this cleanser for about five or six months now and my acne
                                is almost completely gone. I really struggled for years with my skin and tried
                                everything possible but this is the only thing that managed to clear up my
                                skin. 100% recommend and will continue to use is for sure.</p>
                        </li>
                        <li className="comment__item">
                            <div className="name">Aman gupta</div>
                            <div className="start">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
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
