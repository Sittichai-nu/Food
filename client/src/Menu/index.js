import React from 'react'
import { foods, formatPrice } from '../FoodList/FoodLists'
import './style.css'

const index = ({setOpenFood}) => {
    return (
        <div className='index-container'>
            <h1>Menu</h1>
            {Object.entries(foods).map(([sectionName, foods]) => (
                <>
                    <h2>{sectionName}</h2>
                    <div>
                        {foods.map(food=>(
                            <div>
                            <div>{food.itemName}</div>
                            <div>{formatPrice(food.price)}</div>
                            </div>
                        ))}
                    </div>
                </>
            ))}
        </div>
    )
}

export default index
