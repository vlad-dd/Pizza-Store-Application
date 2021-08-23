const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

let initialState = {
    category: null,
    sortBy: 'Популярності'
}

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.sortType
            }
        }

        case SET_CATEGORY: {
            return {
                ...state,
                category: action.category
            }

        }
        default:
            return state
    }
}


export const setSortFilter = (type) => {
    return {
        type: SET_SORT_BY,
        sortType: type
    }
}

export const setSortCategory = (value) => {
    return {
        type: SET_CATEGORY,
        category: value
    }
}

export default filterReducer;