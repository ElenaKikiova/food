import FoodRow from "./FoodRow"

const ResultsTable = ({ results, onAddFood }) => {
    return (
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
            <tbody>
                {results.map((item) => (<FoodRow item={item} showAddButton onAdd={onAddFood} />))}
                {results.length === 0 && <tr><td colspan="6"><p>No results</p></td></tr>}
            </tbody>
        </table>
    )
}

export default ResultsTable