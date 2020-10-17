import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Button from "react-bootstrap/Button";
import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className='footer-top'>
                    <ul className='footer-col1'>
                        <h4>
                            Follow us on
                        </h4>
                        <li>
                            <div className='social-media'>
                                <FacebookIcon />
                                <TwitterIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                            </div>
                        </li>
                        <p>
                            Get app exclusive deals
                        </p>
                        <div>
                            <Button><PhoneAndroidIcon />Download Our App</Button>
                        </div>
                        <li>

                        </li>

                    </ul>
                    <ul className='footer-col2'>
                        <h4>
                            GrabOne
                        </h4>
                        <li>
                            GrabOne Guarantee
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            About Us
                        </li>
                        <li>
                            Terms & Returns
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Gift Cards
                        </li>

                    </ul>
                    <ul className='footer-col3'>
                        <h4>
                            My Account
                        </h4>
                        <li>
                            My Account
                        </li>
                        <li>
                            My Cart
                        </li>
                        <li>
                            My Coupons
                        </li>
                        <li>
                            FAQ
                        </li>

                    </ul>
                    <ul className='footer-col4'>
                        <h4>
                            Merchants
                        </h4>
                        <li>
                            Run a Deal
                        </li>
                        <li>
                            Merchant Centre
                        </li>

                    </ul>
                    <div className='footer-col5'>
                        <h4>
                            Newsletter Signup
                        </h4>
                        <p>
                            Sign up for our daily emails and we'll send you all the best deals, tailored for you.
                        </p>
                        <div>
                            <form class="sub-form" method="post" action="">
                                <MailOutlineIcon />
                                <input name="email" type="email" value="" placeholder="Enter email address" className='email'>
                                </input>
                                <Button>Subscribe</Button>
                            </form>
                        </div>

                    </div>
                </section>
                <section className='footer-bottom'>
                    <span>Privacy Policy</span>
                    <p>© 2020 GrabOne Limited</p>
                    <img src='https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png'/>
                </section>
            </footer>
        )
    }
}
