import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'

const Home = () => {
    const [routines, setRoutines] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/routines")
            .then((serverResponse) => {
                console.log("Good to go!", serverResponse.data)
                setRoutines(serverResponse.data)
            })
            .catch(error => console.log("BADBADNOTGOOD!", error))
    }, [])

    return (
        <>
            {/* <div>{JSON.stringify(routines)}</div> */}
            <Header headTitle={`Home`} />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Page Count</th>
                        <th>Available</th>
                        <th>Routine Page</th>
                    </tr>
                </thead>
                <tbody>
                    {routines.map((routine) => {
                        return (
                            <tr key={routine._id}>
                                <td>{routine.title}</td>
                                <td>{routine.author}</td>
                                <td>{routine.pages}</td>
                                <td>{routine.isAvailable ? "Yes" : "No"} | <Link to={`/routines/${routine._id}/update`}>Edit</Link></td>
                                <td><Link to={`/routines/${routine._id}`}><button>Routine Details</button></Link></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Home