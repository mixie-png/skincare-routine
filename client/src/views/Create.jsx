import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

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
            <Header headTitle={`Add a Routine`} />
            <form onSubmit={handleSubmit}>
                <div>
                    Title:
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
                </div>
                <div>
                    Author Name:
                    <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                    {errors.author && <p style={{ color: "red" }}>{errors.author.message}</p>}

                </div>
                <div>
                    Page Count:
                    <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} />
                    {errors.pages && <p style={{ color: "red" }}>{errors.pages.message}</p>}
                </div>
                <div>
                    Is It Available?
                    <input type="checkbox" checked={isAvailable} onChange={(e) => setIsAvailable(e.target.checked)} />
                </div>
                <button type="submit">Add Routine!</button>
            </form>
        </>
    )
}

export default Create