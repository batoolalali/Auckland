import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './discover.css';


//     https://picsum.photos/200/300  for random images

export default class discover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }

    componentDidMount() {
        fetch("https://cf-js-401-api-server.herokuapp.com/api/v1/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result.results
                    });
                },
            )
    }
    render() {
        console.log('hi', this.state.items);
        let rand1 = this.state.items[Math.floor(Math.random() * 10)];
        let rand2 = this.state.items[Math.floor(Math.random() * 10)];
        if (this.state.items[0]) {
            return (
                <section className='discover-section'>
                    <aside className='discover'>
                        <h2>Discover</h2>
                        <ul className="discover-list" >
                            <li>
                                <span className="discover-name">Featured Auckland deals</span>
                                <span className="deals-amount" >187</span>
                            </li>

                            <li>
                                <span className="discover-name">Collections</span>
                                <span className="deals-amount" >38</span>
                            </li>

                            <li>
                                <span className="discover-name">Escapes</span>
                                <span className="deals-amount" >89</span>

                            </li>

                            <li>
                                <span className="discover-name">Picked for You</span>
                                <span className="deals-amount" ></span>

                            </li>

                            <li>
                                <span className="discover-name">Activities, Events &amp; Outdoors</span>
                                <span className="deals-amount" >177</span>
                            </li>

                            <li >
                                <span className="discover-name">Store</span>
                                <span className="deals-amount">1159</span>
                            </li>

                            <li >
                                <span className="discover-name">Restaurants, Bars, Cafes</span>
                                <span className="deals-amount" >56</span>
                            </li>

                            <li >
                                <span className="discover-name">Beauty, Massage &amp; Spa</span>
                                <span className="deals-amount" >215</span>
                            </li>

                            <li >
                                <span className="discover-name">House &amp; Garden</span>
                                <span className="deals-amount" >603</span>
                            </li>

                            <li >
                                <span className="discover-name">Fitness &amp; Sports</span>
                                <span className="deals-amount" >63</span>
                            </li>

                            <li >
                                <span className="discover-name">Automotive</span>
                                <span className="deals-amount" >85</span>
                            </li>
                        </ul>
                    </aside>
                    <div className='part1 top-card '>

                        <Card style={{ width: '18rem' }} >
                            <Card.Img className='front' variant="top" img src="https://picsum.photos/200/300?random=1" />
                            <div className='back'>{rand1.description} </div>
                            <Card.Body className='product'>
                                <Card.Title>{rand1.displayName}</Card.Title>
                                <p className='card-vendor'>Vendor</p>
                                <p className='card-location'>loc</p>
                                <p className='from'>from</p>
                                <p className='bought'>{rand1.stock} bought <span className='sale'>${rand1.price - rand1.price * 0.15}</span> <span className='price'>${rand1.price}</span> </p>

                            </Card.Body>
                        </Card>
                    </div>

                    <div className='part2 top-card'>
                        <Card style={{ width: '18rem' }} className='collection'>
                            <Card.Img variant="top" img src="https://picsum.photos/200/300?random=2" />
                            <div className='back'>{rand2.displayName} </div>
                            <Card.Body>
                                <Card.Title >{rand2.displayName}</Card.Title>
                                <p className='card-vendor'>      Multiple deals</p>
                                <Button className='view' variant="outline-primary">View Collection <ArrowForwardIosOutlinedIcon fontSize="small" /></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </section>
            );
        }
        else return (<div></div>)
    }
}
