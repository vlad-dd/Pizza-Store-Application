import React, { useState } from 'react'
import { setSortCategory } from '../../redux/FilterReducer'
import { useDispatch, useSelector } from 'react-redux'

const Categories = ({items}) => {

    const [activeCategory, setActiveCategory] = useState('')

    const dispatch = useDispatch()
    
    const setActive = (name) => {
        dispatch(setSortCategory(name))
        setActiveCategory(name)
    }

    const setNull = (value) => {
        dispatch(setSortCategory(value))
        setActiveCategory(value)

    }


    let categoriesItems = items.map((i, index) => {
        return <li className={activeCategory === i ? 'active': ''} onClick={() => {setActive(i)}} key={`${i}_${index}`} >{i}</li>
    })

    return (
        <div>
             <div className="categories">
              <ul>
                  <li className = {activeCategory == null ? 'active' : ''} onClick = {() => {setNull(null)}}>Всі</li>
                {categoriesItems}
               
              </ul>
            </div>
        </div>
    )
}

export default Categories
