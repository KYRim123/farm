import React from 'react'
import TippyC from '../../../components/TippyC/TippyC'
import { Link } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'
import "./navbar.scss"
function Navbar() {
    const navbar = [
        {
            name: 'thắp sáng', 
            navLink: [
                { name: 'đèn tích điện', to: '/products' },
                { name: 'đèn đèn lồng', to: '/products' },
                { name: 'đèn huỳnh quang', to: '/products' },
            ]
        },
        { 
            name: 'phân bón',
            navLink: [
                { name: 'phân hữu cơ', to: '/products' },
                { name: 'phân hóa học', to: '/products' },
                { name: 'phân vi sinh', to: '/products' },
            ]
        
        },
        { 
            name: 'đất & chất nền', 
            navLink: [
                { name:'đất sét', to: '/products' },
                { name:'đất cát', to: '/products' },
                { name:'đất đỏ', to: '/products' },
            ]
        },
        { 
            name: 'chậu & thùng chứa',
            navLink: [
                { name:'chậu xi măng', to: '/products' },
                { name:'chậu đất sét', to: '/products' },
                { name:'chậu treo', to: '/products' },
            ]
        },
        { 
            name: 'máy bơm',
            navLink: [
                { name:'bơm xoắn', to: '/products' },
                { name:'bơm tia', to: '/products' },
                { name:'bơm dạng cánh quạt', to: '/products' },
            ]
        },
        { 
            name: 'Cây & Làm vườn',
            navLink: [
                { name:'cây lá nước', to: '/products' },
                { name:'các loại hoa', to: '/products' },
                { name:'cây bóng mát', to: '/products' },
            ]
        },
        { 
            name: 'Thông gió & Điều hòa không khí',
            navLink: [
                { name:'Dasin KVF – 1025', to: '/products' },
                { name:'KVF-2460', to: '/products' },
                { name:'KVF-3076', to: '/products' },
            ]
        },
    ]
  return (
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
  )
}

export default Navbar
