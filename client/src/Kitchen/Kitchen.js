import React from 'react'
import {useKitchen} from '../Hooks/useKitchen'
import Index from './index'
// import Order from '../Menu/Order'



function Kitchen() {
    const kitchen = useKitchen();
    // const [placeOrder, setPlaceOrder]=useState();

    return (
        <div className=''>
            <Index  {...kitchen}/>
            {/* <Order {...kitchen} /> */}
        </div>
    )
}

export default Kitchen
