import React from 'react'
import { useEffect ,useState } from 'react'
// import {shops} from './Shops'
import { useParams } from 'react-router-dom'
function ShopProducts({shops}) {
    const [products ,setProducts] = useState([])
    const {shopId} = useParams()
    useEffect (()=>{
        fetch(`/products?shopId=${shopId}`)
        .then(r => r.json())
        .then(data => setProducts(data))
    })
  return (
    <div>
      <h1>shops</h1>
     <ul>
      {products.map((product)=>(
        <li key={product.id}>
          <strong>{product.name}</strong>
          <br />
          <img src={product.image} alt="online market" />
          <p>description: {product.description}</p>
          <p>Quantity :{product.quantity}</p>
          
          
          </li>
      ))}
     </ul>

    </div>
  )
}

export default ShopProducts