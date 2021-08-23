import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Cart from './Components/Header/Cart'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzaActionCreator } from './redux/CartReducer'
import { setTotalActionCreator, setCountActionCreator } from './redux/PizzaReducer'
import Redirect from './Components/Common/Redirect'

const App = () => {

  const dispatch = useDispatch()

  let orderedItems = useSelector(state => state.CartReducer.orderedItems)

  let orderInfo = useSelector(state => state.CartReducer.addedPizzas)

  let deletedPizzas = useSelector(state => state.CartReducer.deletedPizzas)

  let totalPrice = orderInfo.reduce((sum, obj) => obj.price + sum, 0)

  let count = orderInfo.length;

    useEffect(() => {
        axios.get('https://611aa466822cb00017cbc497.mockapi.io/Order').then((response) => {
          dispatch(getPizzaActionCreator(response.data))
        })
    }, [orderedItems])



    useEffect(() => {
      dispatch(setTotalActionCreator(totalPrice))
      dispatch(setCountActionCreator(count))
  }, [orderInfo])

  


  return (
    <div>
   <div className="wrapper">
   <Route exact path='/cart' component={() => <Cart/>} /> 
   <Route path='/home' render={Header} /> 
   <Route path='/home' render={Main} /> 
   <Route path='/' render={Redirect} /> 
      
    </div>
    </div>
  )
}


export default App
