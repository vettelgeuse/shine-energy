import React, { useState } from "react";
import "./App.css";

function App() {
  const [gas, setGas] = useState(null);
  const [gasBillAmount, setGasBillAmount] = useState(0);
  const [electricity, setElectricity] = useState(null);
  const [electricityAmount, setElectricityAmount] = useState(0);
  const handleChangeOnGas = e => {
    setGas(e.target.value);
  };
  const handleChangeOnElectricity = e => {
    setElectricity(e.target.value);
  };
  const handleGasClick = () => {
    setGasBillAmount(calculateBill(gas));
  };
  const handleElectricityClick = () => {
    setElectricityAmount(calculateBill(electricity))
  }
  const initialValue = 11000;
  const calculateBill = (energyType) => {
    let units = energyType - initialValue;
    let billAmount =
      units <= 100 ? (units * 10) / 100 : ((units - 100) * 20 + 100 * 10) / 100;
    return billAmount;
  };


  return (
    <div className="App">
      <div className="gasForm">
        <label>Gas</label>
        <input
          type="text"
          value={gas}
          placeholder={`Previous reading ${initialValue}`}
          onChange={handleChangeOnGas}
        />
        <button onClick={handleGasClick}>Calculate</button>
      </div>
      <div className='electricityForm'>
      <label>Electricity</label>
      <input
        type="text"
        value={electricity}
        placeholder={`Previous reading ${initialValue}`}
        onChange={handleChangeOnElectricity}
      />
      <button onClick={handleElectricityClick} >Calculate</button>
      </div>
      <h1>Your bill amounts to £{gasBillAmount + electricityAmount}</h1>
    </div>
  );
}

export default App;
