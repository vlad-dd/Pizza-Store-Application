import React from 'react'
import Button from './Button'

const Header = () => {
  
    return (
        <div>
        <div className="header">
        <div className="container">
         
          <div className="header__logo">
            <img className='logo_img' width="58" src="https://image.flaticon.com/icons/png/128/1404/1404945.png" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>Best pizza in the world</p>
            </div>
          </div>
          <div className="header__cart">
            <Button />
           
          </div>
        </div>
      </div>
        </div>
    )
}

export default Header
