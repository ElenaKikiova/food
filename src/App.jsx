import './App.css';
import React, { useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';

function App() {

  const [items, setItems] = useState([]);

  const onAddFood = (item) => {
    console.log(item, items)
    if (items.indexOf(item) === -1) {
      setItems((items) => [...items, item])
    }
  }

  return (
    <div className="App">
      <Table items={items} />
      <Search onAddFood={onAddFood} />
    </div>
  );
}

export default App;
