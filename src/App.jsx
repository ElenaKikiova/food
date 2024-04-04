import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import ResultsTable from './components/ResultsTable';
import { useNavigate } from 'react-router-dom';

function App() {

  const [items, setItems] = useState([]);
  const [results, setResults] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    onSearch("")
  }, [])

  const onAddFood = (item) => {
    if (items.indexOf(item) === -1) {
      setItems((items) => [...items, item])
    }
  }

  const onSearch = async (value) => {
    try {
      const res = await fetch(`http://localhost:3000/foods?name_like=${value}`)
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
      <button onClick={() => navigate("form")} className="toggleFormButton">Create food</button>
      <ResultsTable results={results} onAddFood={onAddFood} />
    </div>
  );
}

export default App;
