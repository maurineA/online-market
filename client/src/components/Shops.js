import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Shops() {
const [shops,setShops] = useState([])
useEffect(()=>{
    fetch('/shops')
    .then((r)=>r.json())
    .then(data => setShops(data))
},[])

    
  return (
    <div>
        <h1>Shops Available</h1>
        {shops.map((shop) =>(
            <div key={shop.id} className='each_shop'>
                <h2>
                <Link to={`/shops/${shop.id}`}>{shop.shopname}</Link>
                    </h2>
                <h3>Owner: {shop.username}</h3>
                <h2>
                physical adress:{shop.address}
                </h2>
                <h2>
                    contact :{shop.contact}
                </h2>
                
            </div>
        ))}
    </div>
  )
}

export default Shops