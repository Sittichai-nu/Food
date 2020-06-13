import React from 'react'
import { foods, formatPrice } from '../FoodList/FoodLists'
import './style.css'

const index = ({ setOpenfood }) => {
    return (
        <>
            <div className='index-container'>
                <h1 className='menus'>MENU</h1>
                {Object.entries(foods).map(([sectionName, foods]) => (
                    <>
                        <h2 className='sectionName'>{sectionName}</h2>
                        <div className='grid'>
                            {foods.map(food => (
                                <div className='food' onClick={() => {
                                    setOpenfood(food);
                                }}>
                                    <div>{food.itemName}</div>
                                    <div>{formatPrice(food.price)}</div>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </>
    )
}

export default index
