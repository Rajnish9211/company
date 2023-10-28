
import './App.css';
import AddCar from "./AddCar";
import CarList from "./CarList";
import { useState } from 'react';

function App() {
  const[cars,setCars]=useState([]);
  const addCar = (newCar) => {
    const existingCarIndex=cars.findIndex(
      (car)=>car.name===newCar.name && car.model===newCar.model
    );
    if(existingCarIndex!==-1){
      const updateCar = [...cars];
      updateCar[existingCarIndex].quantity += newCar.quantity;
      setCars(updateCar);
    }
    else{
      setCars([...cars,newCar]);
    }
  }
  return (
    <>
    <div className="App">
      <AddCar onAddCar={addCar}/>
      <CarList cars={cars}/>
      </div>
      </>
  );
}

export default App;
