import React, { Component } from 'react'
import "./Ingredient.css"
import {meat} from "../Data/Data";
import {vege} from "../Data/Data";
import {frui} from "../Data/Data";
import store from "../redux/store";
import Counter from "./Counter"

import ReactDOM from 'react-dom';

export default class Ingredient extends Component {

    state = {
        list:store.getState()
    }

    componentDidMount() {
        store.subscribe(()=> {
            this.setState(
                {list:store.getState()})
        })
    }

    render(){
        return (
            <> {console.log(this.state)}
                <div className='ingredient_meat'>
                    <h1>Meat</h1>
                    <items className='meat'>
                        {
                            meat.map((item, index) => (
                                <div className='item_holder'>
                                    <div className='content_holder'>
                                        <div className='item_number'>
                                            <Counter />
                                        </div>
                                        <h2>{item.name}</h2>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                    <img className='ingredient_meat_pic' src={item.img} />
                                </div>
                            ))
                        }
                    </items>
                </div>
                <div className='ingredient_meat'>
                    <h1>Vegetables</h1>
                    <items className='vege'>
                        {
                            vege.map((item, index) => (
                                <div className='item_holder'>
                                    <div className='content_holder'>
                                        <div className='item_number'>
                                            <Counter />
                                        </div>
                                        <h2>{item.name}</h2>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                    <img className='ingredient_meat_pic' src={item.img} />
                                </div>
                            ))
                        }
                    </items>
                </div>
                <div className='ingredient_meat'>
                    <h1>Fruits</h1>
                    <items className='frui'>
                        {
                            frui.map((item, index) => (
                                <div className='item_holder'>
                                    <div className='content_holder'>
                                        <div className='item_number'>
                                            <Counter />
                                        </div>
                                        <h2>{item.name}</h2>
                                        <p className='date'>{item.date}</p>
                                    </div>
                                    <img className='ingredient_meat_pic' src={item.img} />
                                </div>
                            ))
                        }
                    </items>
                </div>
            </>
        )
    }
}