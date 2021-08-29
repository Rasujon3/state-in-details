import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import React, { createContext, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoryContext.Provider value={count}>
      <p>count value: {count}</p>
      <Header count={count} setCount={setCount}></Header>
      <Home />
      <Shipment/>
    </CategoryContext.Provider>
  );
}

export default App;
