import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import ResultsTable from './components/ResultsTable';
import Form from './components/Form';

function App() {

  const [items, setItems] = useState([]);
  const [results, setResults] = useState([])
  const [toggleForm, setToggleForm] = useState(false)

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

  const onCreateFood = async (food) => {
    try {
      const res = await fetch(`http://localhost:3000/foods`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(food)
      })
      const data = await res.json()
      if (data) {
        setToggleForm(false)
        onSearch("")
        alert(`Product ${food.name} added successfully!`)
      }
    }
    catch (err) {
      console.log(err, res)
    }
  }

  return (
    <div className="App">
      <Table items={items} />
      <Search onSearch={onSearch} />
      <button onClick={() => setToggleForm(true)} className="toggleFormButton">Create food</button>
      <Form toggleForm={toggleForm} onSubmit={onCreateFood} />
      <ResultsTable results={results} onAddFood={onAddFood} />
    </div>
  );
}

export default App;
