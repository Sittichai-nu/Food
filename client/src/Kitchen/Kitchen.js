import React from 'react'
import './style.css'
import {useKitchen} from '../Hooks/useKitchen'
import Index from './index'


function Kitchen() {
    const kitchen = useKitchen();

    return (
        <div className=''>
            <Index  {...kitchen}/>
        </div>
    )
}

export default Kitchen
