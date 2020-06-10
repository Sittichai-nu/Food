import React, { useState } from 'react'
import Index from './index'
import FoodDialog from './FoodDialog'
import './style.css'

const Menu = () => {
    const [openFood, setOpenfood] = useState();
    return (
        <>
        <div className="menu">
            <Index setOpenfood={setOpenfood} />
            <FoodDialog openFood={openFood} setOpenfood={setOpenfood} />

        </div>
        </>
    )
}

export default Menu

