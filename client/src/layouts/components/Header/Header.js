import './headerStyle.scss'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { BiShoppingBag } from 'react-icons/bi'

import icons from '../../../assets/icons'



function Header() {
    const navbar = [
        { name: 'thắp sáng' },
        { name: 'phân bón' },
        { name: 'đất & chất nền' },
        { name: 'chậu & thùng chứa' },
        { name: 'máy bơm' },
        { name: 'Cây & Làm vườn' },
        { name: 'Thông gió & Điều hòa không khí' },
    ]

    return <header className='header'>
        <div className="header-container wide">
            <div className="header--top flex">
                <div className="logo">
                    <img src={icons.logo} alt="" />
                </div>
                <div className="search flex">
                    <input type="text" placeholder='Tìm kiếm sản phẩm, thương hiệu và hơn thế nữa' />
                    <Link to='/'>
                        <FaSearch className='icon' />
                    </Link>
                </div>
                <div className="options flex">
                    <div className="language">
                        <span>VN</span>
                        <BsChevronDown className='icon' />
                    </div>
                    <div className="acount">
                        <Link to='/account'>
                            <VscAccount className='icon' />
                            <span>account</span>
                        </Link>
                    </div>
                    <div className="cart">
                        <Link to='/products'>
                            <BiShoppingBag className='icon' />
                            <span>cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="navbar flex">
                {
                    navbar.map((nav, index) =>
                        <div className="navbar--item">
                            <span>{nav.name}</span>
                            <BsChevronDown className='icon' />
                        </div>
                    )
                }
            </nav>
        </div>
    </header>
}

export default Header