import React, { useCallback, useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import {backgr} from '../../assets/images'
import slider from '../../assets/images'
import './sliderStyle.scss'



function Slider() {
    const [indexSlide, setIndexSlide] = useState(0)
    const refIndex = useRef()
    const image = [slider.img1, slider.img2, slider.img3, slider.img4]
    const delay = 3500


    useEffect(() => {
        refIndex.current = setTimeout(() => setIndexSlide(indexSlide === image.length-1 ? 0:indexSlide+1), delay)
        return () => clearTimeout(refIndex.current)
    }, [indexSlide, image.length])

    const btnSlideClick = useCallback((inx) => {
        setIndexSlide(inx)
        clearTimeout(refIndex.current)
    }, [])

    return (
        <div className='slide'>
            <ul className="slide-list" style={{ transform: `translateX(calc(-100% * ${indexSlide}))` }}>
                {
                    image.map((item, index) =>
                        <li
                            key={index}
                            className='slide__item'
                            style={{ backgroundImage: `url(${backgr})` }}
                        >
                            <img src={item} alt="a" />
                            <div className='slide-infor'>
                                <h3>
                                    Chúng tôi chăm sóc góc của bạn
                                    khu vườn và những ngôi nhà đẹp
                                </h3>
                                <p>
                                    Chúng tôi chăm sóc góc của bạn
                                    khu vườn và những ngôi nhà đẹp
                                </p>
                                <Link to="/" className='btn-detail block'>
                                    Chi tiết
                                </Link>
                            </div>
                        </li>)
                }
            </ul>
            <div className="button-slider">
                {
                    image.map((item, index) => <div
                        key={index}
                        className={`button__item ${index === indexSlide ? 'active' : ''}`}
                        onClick={() => btnSlideClick(index)}
                    ></div>)
                }
            </div>
        </div>
    )
}

export default Slider
