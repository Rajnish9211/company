import React from 'react'
import {useState} from 'react'

function AddCar({onAddCar}) {
  const [name,setName]=useState("");
  const [model,setModel]=useState("");
  const [quantity,setQuantity]=useState("");

  const handleAddCar = () => {
    if (name && model && quantity) {
      onAddCar({ name, model,quantity:parseInt(quantity)});
      setName("");
      setModel("");
      setQuantity("");
    }
  };


  return (
    <div>
      <h2>Add car</h2>
      <input type="text" placeholder="Name" value={name} 
      onChange={(e)=>setName(e.target.value)}>
      </input>

      <input type="text" placeholder="Model No." value={model} 
      onChange={(e)=>setModel(e.target.value)}>
      </input>

      <input type="number" placeholder="Quantity" value={quantity} 
      onChange={(e)=>setQuantity(e.target.value)}>
      </input>

      <button onClick={handleAddCar}>Add Cars</button>
    </div>
  )
}

export default AddCar;