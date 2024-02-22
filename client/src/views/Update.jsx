import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

const Update = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState(1)
    const [isAvailable, setIsAvailable] = useState(false)

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
            <Header headTitle={`Update ${title}`} />
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
                <button type="submit">Update Routine!</button>
            </form>
        </>
    )
}

export default Update