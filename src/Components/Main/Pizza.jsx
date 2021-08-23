import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './Container.css'
import {setPizzaActionCreator} from '../../redux/CartReducer'
import { useDispatch, useSelector } from 'react-redux'
import { duplicatePizzaActionCreator } from '../../redux/CartReducer'

const Pizza = ({name, image, price, types, sizes, setPizza, category, testClass, id }) => {
  const dispatch = useDispatch();
  
    const [addedSize, setAddedSize] = useState(null)

    const [addedPizzaName, setAddedPizzaName] = useState(null)


    const [typeChoice, setTypeChoice] = useState(null)

    const [typeIndex, setTypeIndex] = useState(null)

    let allOrderPizzas = useSelector(state => state.CartReducer.addedPizzas)

    const setData = (name, image, price) => {
        axios.post('https://611aa466822cb00017cbc497.mockapi.io/Order', {name: name, image: image, price: price, size:addedSize, type:typeIndex}).then(() => {
          dispatch(setPizzaActionCreator({name: name, image: image, price: price, size:addedSize, type:typeIndex}))
         })

        
         allOrderPizzas.map((el) => {
          el.name == name  && el.size == addedSize && el.type == typeIndex ? dispatch(duplicatePizzaActionCreator(name, addedSize, typeIndex)) : console.log('no')
        })
      } 
       

 
    

   const setPizzaSize = (size, pizzaName) => {
      setAddedSize(size)
      setAddedPizzaName(pizzaName)
    }

    const setPizzaType = (name, index) => {
        setTypeChoice(name)
        setTypeIndex(index)
    }

    return (
    <div className='allPizzas'>
     <div className="pizza-block">
       <div className={testClass}> <img
          className="pizza-block__image"
          src={image}
          alt="Pizza"
        /></div>
       
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            { types.map((currentType, index) => {
        return <li onClick = {() => {setPizzaType(name, index)}} className={typeChoice ==  name && typeIndex == index ? 'active' : ''} >{currentType == 0 ? 'Тонке' : 'Класичне'}</li>})}
          </ul>
          <ul>
          { sizes.map((size) => {
        return <li className={addedSize == size && addedPizzaName == name ? 'active' : ''} onClick = {() => {setPizzaSize(size, name)}}>{size} см</li>

    })}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{price} грн</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick = {() => setData(name, image, price, id)}><span>Добавити</span></span>
          </div>
        </div>
      </div>

    </div>
    )
}

export default Pizza
