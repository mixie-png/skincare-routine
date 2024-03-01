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
    const [products, setProducts] = useState([
        { category: "cleanser", productName: "", productOrder: 1, repurchase: false },
    ]);

    const [errors, setErrors] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/routines/${id}`)
            .then((response) => {
                console.log("Good to go!", response.data)
                setRoutineName(response.data.routineName)
                setRoutineType(response.data.routineType)
                setFrequency(response.data.frequency)
                setProducts(response.data.products)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [id])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = { routineName, routineType, frequency, products }

        axios.put(`http://localhost:8000/api/routines/${id}`, tempObj)
            .then((response) => {
                console.log("UPDATE ROUTINE is good to go!", response.data)
                // redirect
                navigate(`/routines/${id}`)
            })
            .catch((error) => {
                console.log("UPDATE ROUTINE ERROR!!!", error.response.data.errors)
                setErrors(error.response.data.errors)
            })
    }

    const handleProductChange = (index, field, e) => {
        const newProducts = structuredClone(products);
        newProducts[index][field] = field === "repurchase" ? e.target.checked : e.target.value;
        setProducts(newProducts);
    };

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

                {products.map((product, index) => (
                    <div key={index}>
                        <div>
                            <p className='mainPtags'>Category</p>
                            <select value={product.category} onChange={(e) => handleProductChange(index, 'category', e)}>
                                <option value="Cleanser">Cleanser</option>
                                <option value="Toner">Toner</option>
                                <option value="Moisturizer">Moisturizer</option>
                                <option value="Sunscreen">Sunscreen</option>
                                <option value="Treatment">Treatment</option>
                            </select>
                        </div>
                        <div>
                            <p className='mainPtags'>Product Name</p>
                            <input value={product.productName} onChange={(e) => handleProductChange(index, 'productName', e)} />
                        </div>
                        <div>
                            <p className='mainPtags'>Product Order</p>
                            <input type="number" value={product.productOrder} onChange={(e) => handleProductChange(index, 'productOrder', e)} />
                        </div>
                        <div className='repurchase-container'>
                            <p className='mainPtags'>Repurchase?</p>
                            <input type='checkbox' checked={product.repurchase} onChange={(e) => handleProductChange(index, 'repurchase', e)} />
                        </div>
                    </div>
                ))}
                <div><button type="submit" className='submitButton'>Update</button></div>
            </form>
            <Footer></Footer>
        </>
    )
}

export default Update