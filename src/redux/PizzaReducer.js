const SET_PIZZA = 'SET_PIZZA';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const SET_COUNT = 'SET_COUNT';

let initialState = {
    pizzas: [],
    total: 0,
    count: 0
}

const PizzaReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_PIZZA: {
            return {
                ...state,
                pizzas: action.pizza
            }
        }

        case SET_TOTAL_PRICE: {
            return {
                ...state,
                total: action.price
            }
        }

        case SET_COUNT: {
            return {
                ...state,
                count: action.newCount
            }
        }

        default:
            return state
    }
}


export const setPizza = (newPizza) => {
    return {
        type: SET_PIZZA,
        pizza: newPizza
    }
}

export const setTotalActionCreator = (value) => {
    return {
        type: SET_TOTAL_PRICE,
        price: value
    }
}

export const setCountActionCreator = (newValue) => {
    return {
        type: SET_COUNT,
        newCount: newValue
    }
}

export default PizzaReducer;