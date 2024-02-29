import React from 'react'
import Footer from './Footer'
import Header from './Header'
import '../assets/static/css/Products.css'
import prettyFlowers from '../assets/pics/pretty-flowers.png'
import axios from 'axios'
import { useState, useEffect } from 'react'



const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/")
      .then((serverResponse) => {
        console.log("Good to go!", serverResponse.data)
        setProducts(serverResponse.data)
      })
      .catch(error => console.log("BADBADNOTGOOD!", error))
  }, [])

    return (
      <div>
        <Header headTitle={`SkinRoutine`} />
        <img className='prettyFlowers' src={prettyFlowers} alt="pretty flowers"/>

        {/* <div>{JSON.stringify(routines)}</div> */}
  
        <p className='list'>Skincare Product List</p>
        {products.map((product) => {
          return (
            <div>
              <ul key={product._id} className='prod-list'>
                <li>Product Name: {product.productName}</li>
                <li>Category: {product.category}</li>
                <li>Routine Name: {product?.routine?.routineName}</li>
                <li>Repurchase: {product.repurchase ? "Yes" : "No"} </li>
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