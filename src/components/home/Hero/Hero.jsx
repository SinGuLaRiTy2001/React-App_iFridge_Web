import React, { Component } from "react";
import "./hero.css"
import Heading from "../../common/Heading";
import store from "../../redux/store"
import addNewIngredient from "./action"

export default class Hero extends Component {
    refName = React.createRef()
    refCategory = React.createRef()
    refAmount = React.createRef()
    refDate = React.createRef()

    state = {
        list:[{
            ingName:"Lamb",
            ingCategory:"Meat",
            ingAmount:1,
            ingDate:"16 January"
        },
        {
            ingName:"Steak",
            ingCategory:"Meat",
            ingAmount:1,
            ingDate:"12 January"
        },
        {
            ingName:"Cabage",
            ingCategory:"Vegetalbes",
            ingAmount:1,
            ingDate:"17 January"
        },
        {
            ingName:"Tomato",
            ingCategory:"Vegetables",
            ingAmount:1,
            ingDate:"17 January"
        },
        {
            ingName:"Apple",
            ingCategory:"Fruits",
            ingAmount:1,
            ingDate:"15 January"
        },
        {
            ingName:"Orange",
            ingCategory:"Fruits",
            ingAmount:1,
            ingDate:"16 January"
        },
        ]
    }

    render() {
        return (
            <>
                <section className='hero'>
                    <div className='container'>
                        <Heading title='Manage Your Fridge' subtitle='Add some ingredients in your fridge' />
                        <form className="flex">
                            <div className="box">
                                <span>Name</span>
                                <input type='text' ref={this.refName} placeholder='Name' />
                            </div>
                            <div className="box">
                                <span>Category</span>
                                <input type='text' ref={this.refCategory} placeholder='Category' />
                            </div>
                            <div className="box">
                                <span>Amount</span>
                                <input type='text' ref={this.refAmount} placeholder='Amount' />
                            </div>
                            <div className='box'>
                                <span>Date</span>
                                <input type='text' ref={this.refDate} placeholder='Date' />
                            </div>
                            <botton className='btn' onClick={ ()=> this.handleClick() }>
                                <i className='fa fa-plus'></i>Add
                            </botton>
                        </form>
                    </div>
                </section>
            </>
        )
    }

    handleClick = () => {
        let newList = [...this.state.list]
        newList.push({
            ingName:this.refName.current.value,
            ingCategory:this.refCategory.current.value,
            ingAmount:this.refAmount.current.value,
            ingDate:this.refDate.current.value
        })
        this.setState({
            list:newList
        })
        store.dispatch(
            addNewIngredient(newList)
        )
    }
}