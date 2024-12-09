import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div id="footer" className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img width='80px' src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, commodi assumenda debitis non provident explicabo est, quas doloribus quis iste totam quidem dolorum nemo? Qui recusandae ipsa magnam saepe provident impedit quis ratione labore.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 &#169; Drovo.com +- All Right Reserved.</p>
        </div>
    )
}

export default Footer
