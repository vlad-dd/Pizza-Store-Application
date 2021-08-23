import React, { useEffect, useState } from 'react'
import Home from './Home'
import axios from 'axios'
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {

    let orderInfo = useSelector(state => state.CartReducer.addedPizzas)

    let total = useSelector(state => state.PizzaReducer.total)

    const [blya, setBlya] = useState(null)

  

    let qwewe = orderInfo.map((el) => {
            return ((<Items id = {el.id} name = {el.name} image = {el.image} size = {el.size} type = {el.type} price = {el.price} />))
    })


   
   
    return (
        <div>
            <div>
                <Home />
            </div>
            <div>
                {qwewe}
            </div>
            <div>Total: {total}</div>
        </div>
    )
}

export default Cart;
