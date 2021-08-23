import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div>
        <div className="header">
        <div className="container">
          <div className="header__logo">
          <NavLink to='/home'><img className='logo_img' width="58" src="https://image.flaticon.com/icons/png/128/1404/1404945.png" alt="Pizza logo" /></NavLink>
            <div>
              <h1>React Pizza</h1>
              <p>Best pizza in the world</p>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Home
