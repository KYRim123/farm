import React from 'react'
import './contactStyle.scss'
import {GrMail} from 'react-icons/gr'

function Contact() {
    return (
        <div className='contact'>
            <div className='contact-bg'>
            </div>
            <div className="contact-container wide">
                <h2 className='title'>Liên hệ với chúng tôi</h2>
                <div className='sendMail flex'>
                    <p>Nhận cập nhật hàng tuần về sản phẩm của chúng tôi trên email của bạn, chúng tôi cam kết không có thư rác.</p>
                    <div className="sendMail-input flex">
                        <div className='icon-mail'>
                            <GrMail className='icon'/>
                        </div>
                        <input type="text" />
                        <button className='button'>Gửi Mail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
