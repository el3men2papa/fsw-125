import './App.css'
import React, { useState, useEffect} from "react"
import axios from "axios"
import Address from "./Component/address"
import Header from "./Component/Header"





export default function App() {
const [addressBook, setAddress] = useState([])

function getAddress(){
axios.get("/addressBook")
    .then(res => setAddress(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}

function addingNewAddress(newAddress){
  axios.post("/addressBook", newAddress)
  .then(res => {
    setAddress(prevAddress => [...prevAddress, res.data])
  })
  .catch(err => console.log(err))
}

function deleteAddress(addressId){
  axios.delete(`/addressBook/${addressId}`)
  .then(res => {
    setAddress(prevAddress => prevAddress.filter(addressBook => addressBook._id !== addressId))
  })
  .catch(err => console.log(err))
}

function editAddress(updateAddress, addressId){
  axios.put(`/addressBook/${addressId}`, updateAddress)
  .then(res => {
    setAddress(prevAddress => prevAddress.map(addressBook => addressBook._id !== addressId ? addressBook  : res.data))
  })
  .catch(err => console.log(err))

}

  useEffect(() => { 
  getAddress()

  },[]) 

  return (
    <div>
    <Header 
  submit={addingNewAddress}
  btnText="New Address"
    />
    <div className="address-container">
  {addressBook.map(addressBook => <Address {...addressBook} key={addressBook._id} deleteAddress={deleteAddress} editAddress={editAddress}/>) }
  
  </div>
  </div>
  );
}



