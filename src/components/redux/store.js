import { createStore } from 'redux'

const initialState = {
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
]}

const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case "addIngredient":
            const newList = action.payload
            let newState = {...prevState}
            newState.list = newList;
            console.log("store", newState.list)
            return newState
        default: return prevState
    }
}

const store = createStore(reducer);

export default store