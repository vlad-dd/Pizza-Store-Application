import React, { useEffect, useRef, useState } from 'react';
import {setSortFilter} from '../../redux/FilterReducer';
import { useDispatch, useSelector } from 'react-redux';
import {setPizza} from '../../redux/PizzaReducer';

const Sort = () => {

  const dispatch = useDispatch()

    let sortBy = [`Популярності`, `Ціні`, `Алфавіту`]

    const [categoryList, setCategoryList] = useState(false)

    const [category, setCategory] = useState('')

    const pizzas = useSelector(state => state.PizzaReducer.pizzas)

    const sortResult = useSelector( state => state.filterReducer.sortBy)

    const sort = useRef();

    const getCategoriesForChoice = () => {
        setCategoryList(!categoryList)
    }

    const setCurrentCategory = (i) => {
        setCategory(i)
        dispatch(setSortFilter(i))
    }

    

   const handleClick = (e) => {
        if(!e.path.includes(sort.current)) {
            setCategoryList(false)
        }       
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClick)
    }, [])



    const setAllCategoriesData = sortBy.map((el) => {
        return (<li className={category == el ? 'active' : ''} onClick={() => {setCurrentCategory(el)}}>{el}</li>)
     })

      pizzas.map(() => {
      switch(sortResult) {
        case 'Алфавіту': {
          dispatch(setPizza(pizzas.sort((a, b) => {
           return a.name.localeCompare(b.name)
          })))
        }

        case 'Ціні': {
          dispatch(setPizza(pizzas.sort((x, y) => x.price - y.price)))}

        default:
          return pizzas
       }
     })

    return (
        <div>
              <div ref = {sort} className="sort">
              <div className="sort__label">
                <svg
                  className = {categoryList ? 'rotate' : ''}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg" 
                  
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортування по:</b>
                <span onClick = {getCategoriesForChoice}>{category ? category : 'Популярності'}</span>
                {categoryList ?   <div> <div className="sort__popup">
                <ul>
                    {setAllCategoriesData}
                </ul>
              </div></div> : <div></div>}
              
           
              </div>
            
            </div>
        </div>
    )
}

export default Sort
