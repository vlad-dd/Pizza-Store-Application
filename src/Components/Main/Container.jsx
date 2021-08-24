import Pizza from './Pizza'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { setPizza } from '../../redux/PizzaReducer'
import { useDispatch, useSelector } from 'react-redux'


const Container = () => {
  
  const dispatch = useDispatch()

  const pizzas = useSelector(state => state.PizzaReducer.pizzas)

  const sortResult = useSelector( state => state.filterReducer.sortBy)

  const sortedPizzasByCategory = useSelector(state => state.filterReducer.category)


    useEffect(() => {
        axios.get('https://611aa466822cb00017cbc497.mockapi.io/AllPizzas').then((response) => {
          dispatch(setPizza(response.data))
        })
      }, [sortResult])

      let pizzasFromRequest = pizzas.map((el) => {
        return (<Pizza id = {el.id} name = {el.name} image = {el.image} price = {el.price} types = {el.types} sizes = {el.sizes} category = {el.category} rating = {el.rating}/>)
      })

      let sorted = sortedPizzasByCategory == null ? pizzasFromRequest : pizzasFromRequest.filter(item => item.props.category.includes(sortedPizzasByCategory))
          return (
        <div>
        <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            <div className='allPizzasContainer'>
            {sortResult == 'Популярності' ? sorted.sort((a, b) => b.props.rating - a.props.rating)  : sorted}
            </div> 
          </div>
        </div>
    )
}



export default Container;
