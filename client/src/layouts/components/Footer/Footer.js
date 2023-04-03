import './footerStyle.scss'
import {Link} from 'react-router-dom'
import {BsFacebook, BsTwitter, BsYoutube, BsLinkedin, BsInstagram} from 'react-icons/bs'
import {imgPay} from '../../../assets/images'



 function Footer() {
  return (
    <div className="footer">
      <div className="footer-container grid wide">
        <div className="column column1">
          <p>Khách hàng là rất quan trọng, khách hàng sẽ được theo dõi
            nhưng điều tương tự cũng xảy ra cùng lúc với lao động</p>
            <div className="list-icon">
                <Link to="/">
                  <BsFacebook className='icon'/>
                </Link>
                <Link to="/">
                  <BsYoutube className='icon'/>
                </Link>
                <Link to="/">
                  <BsLinkedin className='icon'/>
                </Link>
                <Link to="/">
                  <BsInstagram className='icon'/>
                </Link>
                <Link to="/">
                  <BsTwitter className='icon'/>
                </Link>
            </div>
        </div>
        <div className="column column2">
            <h4 className="name">Xung quanh</h4>
            <p>Liên hệ chúng tôi</p>
            <p>Về chúng tôi</p>
            <p>Sự nghiệp</p>
            <p>Thông tin công ty</p>
        </div>
        <div className="column column3">
            <h4 className="name">Giúp đỡ</h4>
            <p>Liên hệ chúng tôi</p>
            <p>Về chúng tôi</p>
            <p>Sự nghiệp</p>
            <p>Thông tin công ty</p>
            <p>Thông tin công ty</p>
            <p>Sự nghiệp</p>
        </div>
        <div className="column column4">
          <h4 className="name">chính trị</h4>
          <p>Liên hệ chúng tôi</p>
            <p>Về chúng tôi</p>
            <p>Sự nghiệp</p>
            <p>Thông tin công ty</p>
        </div>
      </div>
      <div className="other flex">
        <p>2023 thanh luong</p>
        <img src={imgPay} alt="" />
      </div>
    </div>
  )
}

export default Footer
