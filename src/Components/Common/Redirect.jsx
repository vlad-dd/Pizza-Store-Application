import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Main/Container.css'

const Redirect = () => {
    return (
        <div className='redirect_block'>
            <div>
            <NavLink to='/home'><img className='redirect_image' src = 'https://image.flaticon.com/icons/png/128/1536/1536578.png'/></NavLink>
            <h3>Click me to start</h3>
            </div>
           
        </div>
    )
}

export default Redirect
