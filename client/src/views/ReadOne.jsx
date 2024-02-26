import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ReadOne = () => {
    const { id } = useParams()
    console.log(id)

    const [oneRoutine, setOneRoutine] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/routines/${id}`)
            .then((serverResponse) => {
                console.log("Good to go!", serverResponse.data)
                setOneRoutine(serverResponse.data)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [id])

    const deleteRoutine = (deleteId) => {
        console.log("delete", deleteId)
        axios.delete(`http://localhost:8000/api/routines/${deleteId}`)
            .then((serverResponse) => {
                console.log(serverResponse.data)
                // redirect
                navigate("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
            {/* <div>{JSON.stringify(oneRoutine)}</div> */}
            {
                oneRoutine !== null ? (
                    <div>
                        <Header headTitle={`${oneRoutine.title}`} />
                        <p>By {oneRoutine.author}</p>
                        <p>Page count: {oneRoutine.pages}</p>
                        {oneRoutine.isAvailable ? <div> <p style={{ color: "green" }}>Available for borrowing</p> <button onClick={() => deleteRoutine(id)}>Borrow</button> </div> : <p style={{ color: "red" }}>Not available for borrowing</p>}
                    </div>
                ) : <div>Loading...</div>
            }
            <Footer></Footer>
        </>
    )
}

export default ReadOne