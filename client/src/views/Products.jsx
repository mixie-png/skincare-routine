import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/static/css/Products.css'
import prettyFlowers from '../assets/pics/pretty-flowers.png'
import axios from 'axios'
import { useState, useEffect } from 'react'



const Products = () => {
  const [routines, setRoutines] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/routines/")
      .then((serverResponse) => {
        console.log("Good to go!", serverResponse.data)
        setRoutines(serverResponse.data)
      })
      .catch(error => console.log("BADBADNOTGOOD!", error))
  }, [])

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

  // return (
    // <div>
    //   <Header headTitle={`SkinRoutine`} />

    //   <img className='prettyFlowers' src={prettyFlowers} alt="pretty flowers"/>

    //   <h2>Skincare Product List</h2>
    //   <div className='prod-list'>
    //     <p>Cerave Foaming Facial Cleanser</p>
    //     <ul>
    //       <li>Category: Cleanser</li>
    //       <li>Rating: 4</li>
    //       <li>Repurchase? Yes</li>
    //       <li>Routine? Night</li>
    //     </ul>
    //   </div>
    //   <div className='prod-list'>
    //     <p>Tatcha Dewy Skin Moisturizer</p>
    //     <ul>
    //       <li>Category: Moisturizer</li>
    //       <li>Rating: 5</li>
    //       <li>Repurchase? Yes</li>
    //       <li>Routine? Night</li>
    //     </ul>
    //   </div>



    return (
      <div>
        <Header headTitle={`SkinRoutine`} />
        <img className='prettyFlowers' src={prettyFlowers} alt="pretty flowers"/>

        {/* <div>{JSON.stringify(routines)}</div> */}
  
        <p className='list'>Skincare Product List</p>
        {routines.map((routine) => {
          return (
            <div>
              <ul key={routine._id} className='prod-list'>
                <li>Product Name: {routine.productName}</li>
                <li>Category: {routine.category}</li>
                <li>Routine Name: {routine.routineName}</li>
                <li>Repurchase: {routine.repurchase ? "Yes" : "No"} </li>
                {/* | <Link to={`/routines/${routine._id}/update`}>Edit</Link></li> */}
                {/* <li><Link to={`/routines/${routine._id}`}><button>Routine Details</button></Link></li> */}
              </ul>
            </div>
            )
        })}
        {/* this is the footer that shows the logos */}
        <Footer />
      </div>
    )
  }

export default Products