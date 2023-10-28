import React from 'react'
export default function CarList({cars}){
    return(
        <div>
            <h2>Car List</h2>
            <ul>
                {cars.map((car,index)=>(
                    <li key={index}>
                        {car.name}-{car.model}-Quantity: {car.quantity}
                    </li>  
               ))}
            </ul>
        </div>
    )
}