import React from 'react'

function FoodDialog({openFood, setOpenfood}) {
    function close() {
        setOpenfood();
    }
    if(!openFood) return null;
    return (
        <div>
            {openFood.itemName}
        </div>
    )
}

export default FoodDialog
