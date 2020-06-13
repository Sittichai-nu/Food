import React from 'react'
import Index from './index'
import FoodDialog from './FoodDialog'
import './style.css'
import Order from './Order'
import { useOpenfood } from '../Hooks/useOpenFood'
import { useOrders } from '../Hooks/useOrders'
// import {useKitchen} from '../Hooks/useKitchen'
import {useTitle} from '../Hooks/useTitle'

const Menu = () => {
    const openFood = useOpenfood();
    const orders = useOrders();
    // const kitchen = useKitchen();
   
    useTitle({...openFood, ...orders})

    return (
        <>
            <div className="menu">
                <Index {...openFood} />
                <FoodDialog {...openFood}  {...orders} />
                <Order {...orders} />
            </div>
        </>
    )
}

export default Menu

