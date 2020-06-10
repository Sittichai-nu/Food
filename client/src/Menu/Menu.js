import React from 'react'
import Index from './index'
import FoodDialog from './FoodDialog'
import './style.css'

const Menu = () => {
    return (
        <div className="menu">
            <FoodDialog/>
            <Index/>
        </div>
    )
}

export default Menu

