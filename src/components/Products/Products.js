import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './products.css';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['Featured Auckland deals', 'Collections', 'Escapes', 'Activities, Events & Outdoors', 'Store', 'Restaurants, Bars, Cafes', 'Beauty, Massage & Spa', 'House & Garden', 'Fitness & Sports ', 'Automotive'],
            products:[1,2,3,4,5,6,7,8],
            items:[],
        }
    }

    componentDidMount() {
        fetch("https://cf-js-401-api-server.herokuapp.com/api/v1/products/")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result, 'hi')
                    let arr= result.results.slice(0,8);
                    console.log(arr)
                    this.setState({
                        items: arr
                    });
                },
            )
    }
    render() {
        console.log('hi', this.state.items);
        console.log('lll', this.state.products)
        if (this.state.items) {
        return (
            <>
                {this.state.list.map(item => (
                    <section className='grid-section' >
                        <header>
                            <h2 className='grid-section-title'>{item} </h2>
                            <Button className='see-more' >View More  <ArrowForwardIosOutlinedIcon fontSize="small" /> </Button>
                        </header>
                        <section className='products-list'>
                            {this.state.items.map((item, index)=>(
                               <div className='part1 top-card '>

                               <Card style={{ width: '18rem' }} >
                                   <Card.Img className='front' variant="top" img src={`https://picsum.photos/200/300?random=${index}`} />
                                   <div className='back'>{item.description} </div>
                                   <Card.Body className='product'>
                                       <Card.Title>{item.displayName}</Card.Title>
                                       <p className='card-vendor'>Vendor</p>
                                       <p className='card-location'>loc</p>
                                       <p className='from'>from</p>
                                       <p className='bought'>{item.stock} bought <span className='sale'>${Math.floor(item.price - item.price * 0.15)+1}</span> <span className='price'>${item.price+1}</span> </p>
       
                                   </Card.Body>
                               </Card>
                           </div>
                            ))}
                        </section>
                    </section>
                ))}
            </>
        )
    }
    else return (<div>hello</div>)
}

}
