const addNewIngredient = newList => {
    return {
        type:"addIngredient",
        payload:newList
    }
}
export default addNewIngredient