import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/static/css/Products.css'
import prettyFlowers from '../assets/pics/pretty-flowers.png'
import axios from 'axios'


const Products = () => {
  return (
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
    <div>
      <Header headTitle={`SkinRoutine`} />
      {/* <div>{JSON.stringify(routines)}</div> */}

      <p className='list'>Product List:</p>
      {routines.map((routine) => {
        return (
          <ul key={routine._id}>
            <li>{routine.title}</li>
            <li>{routine.author}</li>
            <li>{routine.pages}</li>
            <li>{routine.isAvailable ? "Yes" : "No"} | <Link to={`/routines/${routine._id}/update`}>Edit</Link></li>
            <li><Link to={`/routines/${routine._id}`}><button>Routine Details</button></Link></li>
          </ul>)
      })}
      <Footer></Footer>
    </div>
  )
}

export default Products