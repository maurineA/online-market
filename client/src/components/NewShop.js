import React, { useState } from 'react'
import AddProducts from './AddProducts';

function NewShop() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [shopName, setShopName] = useState('');
  const [contact ,setContact] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    const NewShop  = {
      username:name,
      address:address,
      shopname:shopName,
      contact:contact
    };
    fetch("/addshop",{
      method:"POST",
      headers:{
        'Content-Type': 'application/json'
      
      },
      body: JSON.stringify(NewShop)
    })
    .then(r => {
      if (!r.ok){
        throw new Error ("failed to add shop")
      }
      return r.json()
    })
    .then (data => {
      alert("shop created succesfully")
    })


  }
  
  return (
    
    <>
    <AddProducts/>
    <form onSubmit={handleSubmit}>
      
      <input type="text" placeholder="Shop Name" value={shopName} onChange={(e) => setShopName(e.target.value)} />
      <input type="text" placeholder="Owner Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input type="text" placeholder='contact' value={contact}onChange={(e)=>setContact(e.target.value)}/>
      <button type="submit">Add Shop</button>
    </form>
    </>
  );
}
export default NewShop