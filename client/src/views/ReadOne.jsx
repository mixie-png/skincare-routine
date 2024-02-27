import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../assets/static/css/ReadOne.css'

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
            <Header headTitle={`SkinRoutine`} />
            <h2>Winter Routine</h2>
            <div className='routine-container'>
                <p>Type: Morning</p>
                <p>Frequency: Daily</p>
                <ol>
                    <li>Cleanser <p>Product: Cerave Foaming Cleanser</p></li>
                    <li>Toner <p>Product: Good Molecules Hydrating Toner</p></li>
                    <li>Moisturizer <p>Product: Trader Joe's Oil-Free Facial Moisturizer</p></li>
                    <li>Sunscreen <p>Product: Supergoop Sunscreen</p></li>
                </ol>
                <Link to="/update/:id"><button className='edit-btn'>Edit</button></Link>
            </div>
            {/* {
                oneRoutine !== null ? (
                    <div>
                        <Header headTitle={`${oneRoutine.title}`} />
                        <p>By {oneRoutine.author}</p>
                        <p>Page count: {oneRoutine.pages}</p>
                        {oneRoutine.isAvailable ? <div> <p style={{ color: "green" }}>Available for borrowing</p> <button onClick={() => deleteRoutine(id)}>Borrow</button> </div> : <p style={{ color: "red" }}>Not available for borrowing</p>}
                    </div>
                ) : <div>Loading...</div>
            } */}
            <Footer></Footer>
        </>
    )
}

export default ReadOne