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
            {
                oneRoutine !== null ? (
                    <div>
                        <h2>{oneRoutine.routineName}</h2>
                        <div className='routine-container'>
                            <p>Type: {oneRoutine.routineType}</p>
                            <p>Frequency: {oneRoutine.frequency}</p>
                            <ol key={oneRoutine._id}>
                                {oneRoutine.products.map((product) => (
                                <li>Product Name: {product.productName}</li>
                                ))}
                            </ol>
                            <div className="btn-container">
                                <Link to={`/routines/${oneRoutine._id}/update`}><button className='edit-btn'>Edit</button></Link>
                                <button onClick={() => deleteRoutine(oneRoutine._id)} className='delete-btn'>Remove</button>
                            </div></div>
                    </div>
                ) : <div>Loading...</div>
            }
            <Footer></Footer>
        </>
    )
}

export default ReadOne