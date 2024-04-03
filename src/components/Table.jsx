import { useEffect, useState } from 'react';
import { React } from 'react';
import FoodRow from './FoodRow';

const Table = ({ items }) => {

    const [totalKcal, setTotalKcal] = useState(0);
    const [totalProtein, setTotalProtein] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);
    const [totalFat, setTotalFat] = useState(0);

    const round = (num) => Math.round(num * 10) / 10

    useEffect(() => {
        let kcal = 0, protein = 0, carbs = 0, fat = 0
        items.map((item) => {
            kcal += Number(item.kcal)
            protein += Number(item.protein)
            carbs += Number(item.carbs)
            fat += Number(item.fat)
        })
        setTotalKcal(() => round(kcal))
        setTotalProtein(() => round(protein))
        setTotalCarbs(() => round(carbs))
        setTotalFat(() => round(fat))
    }, [items])

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
                {items.length > 0 && items.map((item) => <FoodRow item={item} />)}
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