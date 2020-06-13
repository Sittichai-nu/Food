import React from 'react'
import './style.css'


function Index() {
    // const [kitchen, setKitchen] = useState();

    return (
        <div className='kitchen'>
            <h1>Kitchen</h1>
            {

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Orders</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        }
                    </tbody>
                </table>

            }


        </div>
    );
}

export default Index;
