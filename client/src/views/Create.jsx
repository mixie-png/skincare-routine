import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../assets/static/css/CreateEdit.css'


const Create = () => {
    const [routineName, setRoutineName] = useState("")
    const [routineType, setRoutineType] = useState("morning")
    const [frequency, setFrequency] = useState("daily")
    const [category, setCategory] = useState("cleanser")
    const [productName, setProductName] = useState("")
    const [productOrder, setProductOrder] = useState(1)
    const [repurchase, setRepurchase] = useState(false)

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = { routineName, routineType, frequency, category, productName, productOrder, repurchase }

        axios.post(`http://localhost:8000/api/routines/`, tempObj)
            .then((serverResponse) => {
                console.log("CREATE ROUTINE is good to go!", serverResponse.data)
                // redirect
                navigate("/")
            })
            .catch((error) => {
                console.log("CREATE ROUTINE ERROR!!!", error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    return (
        <>
            <Header headTitle={`SkinRoutine`} />
            <h2>Add Skincare Routine</h2>
            <form onSubmit={handleSubmit} className='form'>
                <div>
                    <p className='mainPtags'>Routine Name</p>
                    <input value={routineName} onChange={(e) => setRoutineName(e.target.value)} />
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
                    {errors.category&& <p style={{ color: "red" }}>{errors.category.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Product Name</p>
                    <input value={productName} onChange={(e) => setProductName(e.target.value)} />
                    {errors.productName && <p style={{ color: "red" }}>{errors.productName.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Product Order</p>
                    <input type="number" value={productOrder} onChange={(e) => setProductOrder(e.target.value)} />
                    {errors.productOrder && <p style={{ color: "red" }}>{errors.productOrder.message}</p>}
                </div>
                <div className='repurchase-container'>
                    <p className='mainPtags'>Repurchase?</p>
                    {/* <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} /> */}
                    <input type='checkbox' checked={repurchase} onChange={(e) => setRepurchase(e.target.checked)} />
                    {errors.repurchase && <p style={{ color: "red" }}>{errors.repurchase.message}</p>}
                </div>
                <div><button type="submit" className='submitButton'>Submit</button></div>
            </form>
            <Footer></Footer>
        </>
    )
}

export default Create