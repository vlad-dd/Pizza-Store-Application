const SET_PIZZA_TO_CART = 'SET_PIZZA_TO_CART';
const GET_PIZZA_FROM_CART = 'GET_PIZZA_FROM_CART';
const DELETE_PIZZA_FROM_CART = 'DELETE_PIZZA_FROM_CART';
const SET_DUPLICATE = 'SET_DUPLICATE';

let initialState = {
    orderedItems: [],
    addedPizzas: [],
    deletedPizzas: null,
    duplicated: []
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_PIZZA_TO_CART : {
            return {
                ...state,
                orderedItems: [...state.orderedItems, action.newObj]
            }
        }

        case GET_PIZZA_FROM_CART: {
            return {
                ...state,
                addedPizzas: action.newAddedPizza
            }
        }

        case DELETE_PIZZA_FROM_CART: {
            return {
                ...state,
                deletedPizzas: action.pizzaToDelete
            }
        }

        case SET_DUPLICATE: {
            return {
                ...state,
                duplicated:  [...state.duplicated, action.duplicate]
            }
        }
        default:
            return state;

    }
}

export const setPizzaActionCreator = (pizza) => {
    return {
        type: SET_PIZZA_TO_CART,
        newObj: pizza
    }
}

export const getPizzaActionCreator = (pizza) => {
    return {
        type: GET_PIZZA_FROM_CART,
        newAddedPizza: pizza
    }
}

export const deletePizzaActionCreator = (pizza) => {
    return {
        type: DELETE_PIZZA_FROM_CART,
        pizzaToDelete: pizza
    }
}

export const duplicatePizzaActionCreator = (name, size, index) => {
    return {
        type: SET_DUPLICATE,
        duplicate: {name, size, index}
    }
}

export default CartReducer;