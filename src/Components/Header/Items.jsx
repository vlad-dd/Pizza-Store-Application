import React, { useState } from 'react'
import './Cart.css'
import axios from 'axios';
import { deletePizzaActionCreator } from '../../redux/CartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getPizzaActionCreator } from '../../redux/CartReducer';
const firstType = 'Тонке';
const secondType = 'Класичне';



const Items = ({name, image, price, size, type, id}) => {

    const dispatch = useDispatch()

    let filteredArray = useSelector(state => state.CartReducer.addedPizzas)


    const getDataForDelete = () => {
        axios.delete(`https://611aa466822cb00017cbc497.mockapi.io/Order/${id}`).then(() => {
            dispatch(getPizzaActionCreator(filteredArray.filter(item => item.id !== id)))
        })
        
    }
    
    return (
        <div className='allPizzas'>
            <div>{name}</div>
            <div><img className='cart_img' src = {image}/></div>
            <div>
                <span>Size: {size}</span>
                <div><span>Type: {type == 0 ? firstType : secondType}</span></div>
            </div>
            <div>{price} грн</div>
            <div><img onClick={getDataForDelete} className='active_buttons' src='https://image.flaticon.com/icons/png/128/1828/1828778.png' /></div>
            
        </div>
    )
}

export default Items
