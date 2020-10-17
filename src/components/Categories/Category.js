import React, { Component } from 'react';
import ReactMegaMenu from "react-mega-menu";
import { v4 as uuidv4 } from 'uuid';
import Dropdown from 'react-bootstrap/Dropdown';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import './category.css';

let categories = [['Adventure & Outdoors', 'Events, Shows & Tickets', 'Fun & Leisure', 'Kids Activities'], ['Automotive Parts & Accessories', 'Car Electronics', 'Wash,Repairs & Maintenance']];

let groupOfCategories = ['Activities, Events & Outdoors', 'Automotive'];

// let groupOfCategories = ['Activities, Events & Outdoors', 'Automotive', 'Baby Kids & Toys', 'Beauty, Massage & Spa', 'Books & Magazines', "Clothing & Fashion - Men's", "Clothing & Fashion - Women's", "Electronics & Computers", 'Grocery & Food', 'Health, Nutrition & Dental', 'Holidays, Hotels & Travel', 'House & Garden', 'Pets', 'Restaurants, Bars, Cafes', 'Stationery, Art & Craft', 'Training & Courses', 'Weddings, Occasions & Parties'];

export default class Category extends Component {

    constructor(props) {
        super(props);
    }

    getCategories = (index) => {
        console.log('hi', index)
        let cat = [{
            label: groupOfCategories[index],
            key: uuidv4(),
            items: categories[index].map((category, index) => (<div key={index}>{category}</div>))
        }];
        return cat;
    }
    render() {

        return (
            <>
                {/* <ul className='list'>
                {this.state.groupOfCategories.map((category, index) => (
                    <li  key={index} className='category'  >
                        <Dropdown.Item href="#/action-1" >{category}  </Dropdown.Item>
                        <ArrowForwardIosOutlinedIcon fontSize='small' className='cat-drop-down' onClick={this.changeCategory(category)}/>
                    </li>
                ))}
            </ul>
            <div id='bb'>
                    {this.state.categories[v]} hi
            </div> */}


                {groupOfCategories.map((category, index) => (
                    <Dropdown.Item href="#/action-1" className='mega-item'>
                        {<ReactMegaMenu key={index}
                            direction={"RIGHT"}
                            onExit={() => { }}
                            data={this.getCategories(index)}
                            className='kkk'
                        />}
                        <ArrowForwardIosOutlinedIcon fontSize='small' className='cat-drop-down' />
                    </Dropdown.Item>

                ))}

            </>
        )
    }
}
