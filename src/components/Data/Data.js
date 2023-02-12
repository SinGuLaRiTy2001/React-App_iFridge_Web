import recipe1 from "./recipe1.jpg";
import recipe2 from "./recipe2.jpg";
import recipe3 from "./recipe3.jpg";
export const nav = [
    {
        text: "home",
        path: "/",
    },
    {
        text: "Ingredient",
        path: "/Ingredient",
    },
    {
        text: "dish",
        path: "/dish",
    },
    {
        text: "Recipe",
        path: "/Recipe",
    },
    {
        text: "Favorites",
        path: "Favorite"
    },
    {
        text: "Community",
        path: "/Sharing"
    }
]
export const meat = [
    {
        name: "Lamb",
        img: "./image/Lamb.png",
        date: "16 January",
        num: "3"
    },
    {
        name: "Steak",
        img: "./image/Steak.jpg",
        date: "12 January",
        num: "1"
    }
]

export const vege = [
    {
        name: "Cabage",
        img: "./image/Cabage.jpeg",
        date: "17 January",
        num: "2"
    },
    {
        name: "Tomato",
        img: "./image/Tomato.jpg",
        date: "17 January",
        num: "1"
    }
]

export const frui = [
    {
        name: "Apple",
        img: "./image/Apple.jpg",
        date: "15 January",
        num: "3"
    },
    {
        name: "Orange",
        img: "./image/Orange.jpg",
        date: "16 January",
        num: "5"
    }
]

export const dish =[
    {
        name: "Fried Cabbage",
        img: "./image/Fried_Cabbage.jpg",
        description: "Ingredient Needed: Cabbage"
    },
    {
        name: "Pan-fried Steak",
        img: "./image/Pan_fried_Cabbage.jpg",
        description: "Ingredient Needed: Steak"
    }
]

export const dish_like=[
    {
        name: "Tomato Omelette",
        img: "./image/Tomato_Omelette.jpg",
        description: "Ingredient Needed: Tomato, Egg"
    }
]
export const recipes = [
    {
        id: 1,
        image: recipe1,
        name: "Ayla Espelindo",
        source: "./image/person1.png",
        price: "Jack Olenyeva,Yu Xia",
        description: "Tomato Omelette is delicious and easy to cook so I share this dish with you. If all you have in your fridge are tomatoes and eggs, don't hesitate to make tomato omelette.",
    },
    {
        id: 2,
        image: recipe2,
        name: "Jack Olenyeva",
        source: "./image/person2.png",
        price: "Jian Wen, Helen Demara",
        description: "If you don't have a lot of time to cook, trust me hamburgers are definitely the easiest and tastiest food. Besides, if you are in a hurry, you can take a hamburger with you to eat on the way.",
    },
    {
        id: 3,
        image: recipe3,
        name: "Helen Demara",
        source: "./image/person3.png",
        price: "Tangyujun Han, Xiangyu Liu",
        description: "Do you want to eat something healthy or lost weitht? Don’t hestitate to try a vegetable salad including a lot of vitamin C. It’s very simple to cook and suitable for dinner."
    }
]
export const fav_left = [
    {
        name: "Tomato Omelette",
        source: "./image/recipe1.jpg",
        ingredient: "Ingredients: Tomato, Egg",
    },
    {
        name: "Italian Pasta",
        source: "./image/like-food2.png",
        ingredient: "Ingredients: Tomato, Beef, Pasta",
    },
    {
        name: "Fruit Pizza",
        source: "./image/like-food3.png",
        ingredient: "Ingredients: Flour, Cheese, Fruits"
    }
]
export const fav_right = [
    {
        name: "Pan-fried Pork",
        source: "./image/like-food4.png",
        ingredient: "Ingredients: Pork, Garlic",
    },
    {
        name: "Curry Rice",
        source: "./image/like-food5.png",
        ingredient: "Ingredients: Rice, Curry, Potato",
    },
    {
        name: "Fish & Chips",
        source: "./image/like-food6.png",
        ingredient: "Ingredients: Potato, Fish",
    }
]

/*
export default function (state = items, cate, action) {
switch (action.type) {
    case 'addnum':
        let addlist = state.cate
        addlist.map((item, index) => {
            if (item.name == action.name) {
                item.num++
            }
        })
        return Object.assign({}, state, {cate: [...addlist]})
    case 'delnum':
        let dellist = state.cate
        dellist.map((item, index) => {
            if (item.name == action.name) {
                item.num--
            }
        })
        return Object.assign({}, state, {cate: [...dellist]})
}
}*/
