import React from 'react'
import { formatPrice } from '../FoodList/FoodLists'
import { getPrice } from './FoodDialog'
import { addOrder } from '../actions/order'
import { connect } from 'react-redux';





function Order({ orders, setOrders, setKitchen }) {
    const subtotal = orders.reduce((total, order) => {
        return total + getPrice(order);
    }, 0);
    const tax = subtotal * 0.0725;
    const total = subtotal + tax;

    const deleteItem = index => {
        const newOrders = [...orders];
        newOrders.splice(index, 1);
        setOrders(newOrders);
    };
    const deleteOrders = index => {
        const newOrders = [...orders];
        newOrders.splice(index);
        setOrders(newOrders);

    };

    // const [kitchen, setKitchen] = useState({

    // })
    function send(order) {
        console.log(order)
       
    }

    const kitchen = {
        ...orders
        
    }
    return (
        <div className='order'>
            {
                orders.length === 0 ?
                    (
                        <div className='orderContent'>
                            <h1>ORDERS</h1>
                        </div>
                    )
                    :
                    (
                        <div className='orderContent'>
                            {""}
                            <div className='orderContainer'>
                                Your Orders:
                            </div>
                            {""}
                            {orders.map((order, index,) => (
                                <div className='orderContainer'>
                                    <div className='orderItem'>
                                        <div>{order.quantity}</div>
                                        <div> {order.itemName}</div>
                                        <div />
                                        <div>{formatPrice(getPrice(order))}</div>
                                    </div>
                                    <div className='removeButton' onClick={() => { deleteItem(index) }}>
                                        <div onClick={send(order)} >Remove Order</div>
                                    </div>
                                </div>
                            ))}
                            <div className='orderContainer'>
                                <div className='orderItem'>
                                    <div />
                                    <div>Sub-Total</div>
                                    <div>{formatPrice(subtotal)}</div>
                                </div>
                                <div className='orderItem'>
                                    <div />
                                    <div>Tax</div>
                                    <div>{formatPrice(tax)}</div>
                                </div>
                                <div className='orderItem'>
                                    <div />
                                    <div>Total</div>
                                    <div>{formatPrice(total)}</div>
                                </div>
                            </div>
                        </div>
                    )
            }
            <div className='footer '>
                <div className='confirmButton' color='Your orders is processing' onClick={deleteOrders} >
                    <div >Place Your Orders</div>
                </div>
            </div>
        </div>
    )
}


export default connect(addOrder)(Order)

