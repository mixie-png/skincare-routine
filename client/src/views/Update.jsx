import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../assets/static/css/CreateEdit.css'


const Update = () => {
    const [routineName, setRoutineName] = useState("")
    const [routineType, setRoutineType] = useState("morning")
    const [frequency, setFrequency] = useState("daily")
    const [category, setCategory] = useState("cleanser")
    const [productName, setProductName] = useState("")
    const [productOrder, setProductOrder] = useState(1)
    const [repurchase, setRepurchase] = useState(false)

    const [errors, setErrors] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/routines/${id}`)
            .then((response) => {
                console.log("Good to go!", response.data)
                setRoutineName(response.data.routineName)
                setRoutineType(response.data.routineType)
                setFrequency(response.data.frequency)
                setCategory(response.data.category)
                setProductName(response.data.productName)
                setProductOrder(response.data.productOrder)
                setRepurchase(response.data.repurchase)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [id])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = { routineName, routineType, frequency, category, productName, productOrder, repurchase }

        axios.put(`http://localhost:8000/api/routines/${id}`, tempObj)
            .then((response) => {
                console.log("UPDATE ROUTINE is good to go!", response.data)
                // redirect
                navigate("/")
            })
            .catch((error) => {
                console.log("UPDATE ROUTINE ERROR!!!", error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    return (
        <>
            <Header headTitle={`SkinRoutine`} />
            <h3>Edit Skincare Routine</h3>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <p className='mainPtags'>Routine Name*</p>
                    <input className="input1" value={routineName} onChange={(e) => setRoutineName(e.target.value)} />
                    {errors.routineName && <p style={{ color: "red" }}>{errors.routineName.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Routine Type</p>
                    <select value={routineType} onChange={(e) => setRoutineType(e.target.value)}>
                        <option value="Morning">Morning</option>
                        <option value="Night">Night</option>
                        <option value="Both">Both</option>
                    </select>
                    {errors.routineType && <p style={{ color: "red" }}>{errors.routineType.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Frequency</p>
                    <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Biweekly">Biweekly</option>
                    </select>
                    {errors.frequency && <p style={{ color: "red" }}>{errors.frequency.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Category</p>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Cleanser">Cleanser</option>
                        <option value="Toner">Toner</option>
                        <option value="Moisturizer">Moisturizer</option>
                        <option value="Sunscreen">Sunscreen</option>
                        <option value="Treatment">Treatment</option>
                    </select>
                    {errors.category && <p style={{ color: "red" }}>{errors.category.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Product Name*</p>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)} />
                    {errors.productName && <p style={{ color: "red" }}>{errors.productName.message}</p>}
                </div>

                <div>
                    <p className='mainPtags'>Product Order*</p>
                    <input type='number' value={productOrder} onChange={(e) => setProductOrder(e.target.value)} />
                    {errors.productOrder && <p style={{ color: "red" }}>{errors.productOrder.message}</p>}
                </div>
                <div className='repurchase-container'>
                    <p className='mainPtags'>Repurchase?*</p>
                    <input className='checkbox' type="checkbox" checked={repurchase} onChange={(e) => setRepurchase(e.target.checked)} />
                    {errors.repurchase && <p style={{ color: "red" }}>{errors.repurchase.message}</p>}
                </div>
                <div><button type="submit" className='submitButton'>Update</button></div>
            </form>
            <Footer></Footer>
        </>
    )
}

export default Update