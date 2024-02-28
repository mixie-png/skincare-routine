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
    const [order, setOrder] = useState(1)
    const [repurchase, setRepurchase] = useState(false)

    const [errors, setErrors] = useState({})

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/routines/${id}`)
            .then((response) => {
                console.log("Good to go!", response.data)
                setTitle(response.data.title)
                setAuthor(response.data.author)
                setPages(response.data.pages)
                setIsAvailable(response.data.isAvailable)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [id])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = { title, author, pages, isAvailable }

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
                    <input value={routineName} onChange={(e) => setTitle(e.target.value)} />
                    {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Routine Type* </p>
                    <p className='subPtags'>(Morning, Night, or Both)</p>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Frequency</p>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Product Name*</p>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Category* </p>
                    <p className='subPtags'>(cleanser, toner, moisturizer, spf, treatment)</p>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Product Order</p>
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Rating:</p>
                    <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
                    {errors.pages && <p style={{ color: "red" }}>{errors.pages.message}</p>}
                </div>
                <div>
                    <p className='mainPtags'>Repurchase?* (Yes or No)</p>
                    {/* <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} /> */}
                    <input value={author} onChange={(e) => setPages(e.target.value)} />
                    {errors.pages && <p style={{ color: "red" }}>{errors.pages.message}</p>}
                </div>
                <div><button type="submit" className='submitButton'>Submit</button></div>
            </form>
            <Footer></Footer>
        </>
    )
}

export default Update