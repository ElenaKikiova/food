import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import ResultsTable from './components/ResultsTable';

function App() {

  const [items, setItems] = useState([]);
  const [results, setResults] = useState([])

  useEffect(() => {
    onSearch("")
  }, [])


  const onAddFood = (item) => {
    if (items.indexOf(item) === -1) {
      setItems((items) => [...items, item])
    }
  }

  const onSearch = async (value) => {
    const res = await fetch(`http://localhost:3000/foods?name_like=${value}`)
    try {
      const data = await res.json()
      setResults(data)
    }
    catch (err) {
      console.log(err, res)
    }
  }

  return (
    <div className="App">
      <Table items={items} />
      <Search onSearch={onSearch} />
      <ResultsTable results={results} onAddFood={onAddFood} />
    </div>
  );
}

export default App;
