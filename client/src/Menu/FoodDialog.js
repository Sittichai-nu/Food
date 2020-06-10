import React from 'react'
import './style.css'


function FoodDialog({ openFood, setOpenfood }) {
    function Close() {
        setOpenfood();
    }
    if (!openFood) return null;
    return openFood ? (
        <>
            <div className=''>
                <div className='shadow' onClick={Close}></div>
                <div className='dialog'>
                    <div className='dialogBanner'>{openFood.itemName}
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}

export default FoodDialog
