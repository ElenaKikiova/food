import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

    const [name, setName] = useState("");
    const [kcal, setKcal] = useState(0);
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);

    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        setErrors([])
        let isValid = true
        if (name === null || name.length < 3) {
            setErrors((err) => [...err, 'Name should be at least 3 symbols'])
            isValid = false;
        }
        if (kcal < 1 || kcal > 1000) {
            setErrors((err) => [...err, 'Kcal should be in the range 0-1000'])
            isValid = false;
        }
        if (protein < 0 || protein > 100) {
            setErrors((err) => [...err, 'Protein should be in the range 0-100'])
            isValid = false;
        }
        if (carbs < 0 || carbs > 100) {
            setErrors((err) => [...err, 'Carbs should be in the range 0-100'])
            isValid = false;
        }
        if (fat < 0 || fat > 100) {
            setErrors((err) => [...err, 'Fat should be in the range 0-100'])
            isValid = false;
        }

        if (isValid) {

            try {
                const res = await fetch(`http://localhost:3000/foods`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, kcal, protein, carbs, fat })
                })
                const data = await res.json()
                if (data) {
                    alert(`Product ${name} added successfully!`)
                    navigate("/")
                }
            }
            catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor="name">Kcal</label>
            <input name="name" type="number" value={kcal} onChange={(e) => setKcal(e.target.value)}></input>
            <label htmlFor="name">Protein</label>
            <input name="name" type="number" value={protein} onChange={(e) => setProtein(e.target.value)}></input>
            <label htmlFor="name">Carbs</label>
            <input name="name" type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)}></input>
            <label htmlFor="name">Fat</label>
            <input name="name" type="number" value={fat} onChange={(e) => setFat(e.target.value)}></input>

            {errors.map((error) => <p key={error} className="error">{error}</p>)}

            <button onClick={submit}>Create</button>
            <button onClick={() => navigate("/")}>Cancel</button>
        </form>
    )

}

export default Form