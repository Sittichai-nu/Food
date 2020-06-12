import React from 'react'
import './style.css'
import {formatPrice} from '../FoodList/FoodLists'
import {useQuantity} from '../Hooks/useQuantity'


export function getPrice(order){
    return order.quantity * order.price
  }

function FoodDialog({ openFood, setOpenfood, setOrders, orders }) {
    const quantity = useQuantity(openFood && openFood.quantity);

    function Close() {
        setOpenfood();
    }
    if (!openFood) return null;

    const order = {
        ...openFood,
        quantity: quantity.value

    };
    function addOrder(){
        setOrders([...orders, order]);
        Close();
    }
    return (
        <>
            <div className=''>
                <div className='shadow' onClick={Close}></div>
                <div className='dialog'>
                    <div className='dialogBanner'>{openFood.itemName}
                    </div>
                    <div className='footer '>
                        <div className='confirmButton' onClick={addOrder}>
                        Add Your Orders: {formatPrice(getPrice(order))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) ;
}

export default FoodDialog

