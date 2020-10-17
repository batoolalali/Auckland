import React, { Component } from 'react';
import Category from '../Categories/Category.js'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

import './header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closeButton: false,
        }
    }

    closeButtonHandler = (e) => {

        console.log(e.target.value.length)
        if (e.target.value.length !== 0) {
            console.log(e.target.value, 'hh');
            this.setState({ closeButton: true });
            console.log('after', this.state.closeButton)
        }
        else this.setState({ closeButton: false });
    }


    render() {
        return (
            <>
                <Navbar className='nav-bar' >
                    <h1 className='logo'>GrabOne</h1>
                    <Nav className='left-nav'>
                        <ul id='nav'>
                            <li className='location'>
                                <LocationOnIcon />
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Auckland
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>


                                </Dropdown>
                            </li>
                            <li className='large-size'>
                                <ShoppingCartOutlinedIcon />
                            </li>

                            <li className='large-size'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <PermIdentityOutlinedIcon />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>


                                </Dropdown>
                            </li>
                            <li className='Subscribe large-size'>
                                <MailOutlineOutlinedIcon /> Subscribe
                            </li>
                            <li className='large-size'>
                                <img id='nzme' src='https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png' />
                            </li>
                        </ul>
                    </Nav>
                </Navbar>

                <Navbar className='search'>
                    <ul>
                        <li className='mega-menu'>
                            <Dropdown className='Browse-category'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Browse Category
                                    </Dropdown.Toggle>

                                <Dropdown.Menu className='list'>
                                    <Category />
                                </Dropdown.Menu>


                            </Dropdown>
                        </li>
                        <li className='nav2'>
                            What's New
                        </li>

                        <li className='nav2'>
                            Trending
                        </li>
                        <li className='nav2'>
                            For You
                        </li>
                        <li className='nav2'>
                            Christmas Credit Promo
                        </li>

                        <li className='form'>
                            <form className='search-banner'>
                                <SearchOutlinedIcon />
                                <input placeholder='GrabOne Search' className='search-input' onChange={this.closeButtonHandler}></input>
                                <span className={`${this.state.closeButton}`}>
                                    <CloseOutlinedIcon />
                                </span>

                            </form>
                        </li>



                    </ul>
                </Navbar>
                <nav className='mobile-nav'>
                    <span className='mobile-list'>
                        <p>
                            Home
                        </p>
                        <HomeOutlinedIcon />
                    </span>
                    <span className='mobile-list'>
                        <p>
                            Search
                        </p>
                        <SearchOutlinedIcon />
                    </span>
                    <span className='mobile-list'>
                        <p>Categories</p>
                        <DashboardOutlinedIcon />
                    </span>
                    <span className='mobile-list'>
                        <p>Cart</p>
                        <ShoppingCartOutlinedIcon />
                    </span>
                    <span className='mobile-list'>
                        <p>Account</p>
                        <PermIdentityOutlinedIcon />
                    </span>
                </nav>

            </>
        )
    }
}
