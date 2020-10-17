import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './Deals.css'

export default class Subscribe extends Component {
    render() {
        return (
            <div className="subscribe">
                <div class="message">Get the best deals delivered direct to your inbox each day</div>
                <form class="sub-form" method="post" action="">
                    <MailOutlineIcon/>
                    <input name="email" type="email" value="" placeholder="Enter email address" className='email'>
                    </input>
                    <Button>Subscribe</Button>
                </form>

            </div>
        )
    }
}
