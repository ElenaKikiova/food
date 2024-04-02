import { React } from 'react';

const FoodRow = ({ item, showAddButton, onAdd }) => {

    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.kcal}</td>
            <td>{item.protein}</td>
            <td>{item.carbs}</td>
            <td>{item.fat}</td>
            {showAddButton && <td><button onClick={() => onAdd(item)}>Add</button></td>}
        </tr>
    )
}

export default FoodRow