import { useState } from 'react';
import { React } from 'react';

const Table = ({ items }) => {

    const [totalKcal, setTotalKcal] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFat, setTotalFat] = useState(0);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Kcal</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                </tr>
            </thead>
            <tbody>
                {items.length > 0 && items.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.kcal}</td>
                        <td>{item.protein}</td>
                        <td>{item.carbs}</td>
                        <td>{item.fat}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{totalKcal}</td>
                    <td>{totalProtein}</td>
                    <td>{totalCarbs}</td>
                    <td>{totalFat}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default Table