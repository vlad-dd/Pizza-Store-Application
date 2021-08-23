import {createStore, combineReducers} from 'redux';
import filterReducer from './FilterReducer';
import PizzaReducer from './PizzaReducer';
import CartReducer from './CartReducer';




let reducers = combineReducers(
    {filterReducer: filterReducer,
    PizzaReducer:PizzaReducer,
    CartReducer:CartReducer}
    );

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store;

export default store;