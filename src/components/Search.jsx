import { useEffect } from 'react';
import { React, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import FoodRow from './FoodRow';

const Search = ({ onAddFood }) => {

    const [searchValue, setSearchValue] = useState(null);
    const [results, setResults] = useState([])

    useEffect(() => {
        handleSearch("")
    }, [])


    const handleSearch = useDebounce(async (value) => {
        const res = await fetch(`http://localhost:3000/foods?name_like=${value}`)
        try {
            const data = await res.json()
            setResults(data)
        }
        catch (err) {
            console.log(err, res)
        }
    }, 500);

    const changedSearchValue = (event) => {
        const { value } = event.target;
        setSearchValue(value);

        // Debounce the search callback
        handleSearch(value);
    };

    return (
        <>
            <input value={searchValue} onChange={(e) => changedSearchValue(e)} placeholder="Start typing..." />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Kcal</th>
                        <th>Protein</th>
                        <th>Carbs</th>
                        <th>Fat</th>
                        <th></th>
                    </tr>
                </thead>
                {results.map((item) => (<FoodRow item={item} showAddButton onAdd={onAddFood} />))}
                {results.length === 0 && <p>No results</p>}
            </table>
        </>
    )
}

export default Search