import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../assets/static/css/Create.css'


const Create = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(1)
    const [isAvailable, setIsAvailable] = useState(false)

    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const tempObj = { title, author, pages, isAvailable }

        axios.post(`http://localhost:8000/api/routines`, tempObj)
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
                    <p className='mainPtags'>Routine Name*</p>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
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

export default Create