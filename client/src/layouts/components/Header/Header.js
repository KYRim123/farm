import './headerStyle.scss'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { BiShoppingBag } from 'react-icons/bi'
import icons from '../../../assets/icons'
import TippyC from '../../../components/TippyC/TippyC'



function Header() {
    const navbar = [
        {
            name: 'thắp sáng', 
            navLink: [
                { name: 'đèn tích điện', to: '/' },
                { name: 'đèn đèn lồng', to: '/' },
                { name: 'đèn huỳnh quang', to: '/' },
            ]
        },
        { 
            name: 'phân bón',
            navLink: [
                { name: 'phân hữu cơ', to: '/' },
                { name: 'phân hóa học', to: '/' },
                { name: 'phân vi sinh', to: '/' },
            ]
        
        },
        { 
            name: 'đất & chất nền', 
            navLink: [
                { name:'đất sét', to: '/' },
                { name:'đất cát', to: '/' },
                { name:'đất đỏ', to: '/' },
            ]
        },
        { 
            name: 'chậu & thùng chứa',
            navLink: [
                { name:'chậu xi măng', to: '/' },
                { name:'chậu đất sét', to: '/' },
                { name:'chậu treo', to: '/' },
            ]
        },
        { 
            name: 'máy bơm',
            navLink: [
                { name:'bơm xoắn', to: '/' },
                { name:'bơm tia', to: '/' },
                { name:'bơm dạng cánh quạt', to: '/' },
            ]
        },
        { 
            name: 'Cây & Làm vườn',
            navLink: [
                { name:'cây lá nước', to: '/' },
                { name:'các loại hoa', to: '/' },
                { name:'cây bóng mát', to: '/' },
            ]
        },
        { 
            name: 'Thông gió & Điều hòa không khí',
            navLink: [
                { name:'Dasin KVF – 1025', to: '/' },
                { name:'KVF-2460', to: '/' },
                { name:'KVF-3076', to: '/' },
            ]
        },
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
                    <TippyC
                        render={
                            <button className='button'>ENG</button>
                        }
                    >
                        <div className="language pl-3">
                            <span>VN</span>
                            <BsChevronDown className='icon' />
                        </div>
                    </TippyC>

                    <div className="account pl-3">
                        <Link to='/account'>
                            <VscAccount className='icon' />
                            <span>account</span>
                        </Link>
                    </div>
                    <div className="cart pl-3">
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
                        <TippyC
                            key={index}
                            render={
                                nav.navLink && nav.navLink.map((navLink, indexNavLink) =>
                                    <Link key={indexNavLink} to={navLink.to} className='button'>{navLink.name}</Link>
                                )
                            }
                        >
                            <div className="navbar--item">
                                <span>{nav.name}</span>
                                <BsChevronDown className='icon' />
                            </div>
                        </TippyC>
                    )
                }
            </nav>
        </div>
    </header>
}

export default Header