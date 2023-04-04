import './headerStyle.scss'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { BsChevronDown } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { BiShoppingBag } from 'react-icons/bi'
import icons from '../../../assets/icons'
import TippyC from '../../../components/TippyC/TippyC'
import Navbar from '../Navbar/Navbar'
import {useSelector} from 'react-redux'
import { getQtyCartSelector } from '../../../redux/selector'


function Header() {
    const qtyCart = useSelector(getQtyCartSelector)

    return <header className='header'>
        <div className="header-container wide">
            <div className="header--top flex">
                <Link className="logo" to="/">
                    <img src={icons.logo} alt="" />
                </Link>
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
                        <div className="qtyCart">{qtyCart}</div>
                        <Link to='/cart'>
                            <BiShoppingBag className='icon' />
                            <span>cart</span>
                        </Link>
                    </div>
                </div>
            </div>
            <Navbar/>
        </div>
    </header>
}

export default Header