import React, { useState } from "react";
import "./App.css";

function App() {
  const [gas, setGas] = useState(null);
  const [gasBillAmount, setGasBillAmount] = useState(0);
  const [electricity, setElectricity] = useState(null);
  const handleChangeOnGas = e => {
    setGas(e.target.value);
  };
  const handleChangeOnElectricity = e => {
    setElectricity(e.target.value);
  };
  const handleGasClick = () => {
    setGasBillAmount(calculateGasBill());
  };
  const initialGasValue = 11000;
  const calculateGasBill = () => {
    let units = gas - initialGasValue;
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
          placeholder={`Initial value 11000`}
          onChange={handleChangeOnGas}
        />
        <button onClick={handleGasClick}>Calculate</button>
      </div>
      <div className='electricityForm'>
      <label>Electricity</label>
      <input
        type="text"
        value={electricity}
        placeholder={`Initial value 0`}
        onChange={handleChangeOnElectricity}
      />
      <button>Calculate</button>
      </div>
      <h1>Your bill amounts to £{gasBillAmount}</h1>
    </div>
  );
}

export default App;
