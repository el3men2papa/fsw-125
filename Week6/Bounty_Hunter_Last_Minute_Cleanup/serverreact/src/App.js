import './App.css'
/* useState is use to safe the data and useEffect is use to use the component life sicle */
import React, { useState, useEffect} from "react"
import axios from "axios"
import Jedi from "./Component/Jedi"
import Header from "./Component/Header"





export default function App() {
/* This will setup the useState (data), setdata = useState ([Empty]) */
const [bountyRoute, setBounty] = useState([])
/* 
 This will get all the data from API */
function getBounties(){
axios.get("/bountyRoute")
    .then(res => setBounty(res.data))
    .catch(err => console.log(err.response.data.errMsg))
}

 /* This will add a new data */
function addingNewJedi(newJedi){
  axios.post("/bountyRoute", newJedi)
  .then(res => {
    setBounty(prevJedi => [...prevJedi, res.data])
  })
  .catch(err => console.log(err))
}


/*  This will delete the data matching the ID */
function deleteJedi(jediId){
  axios.delete(`/bountyRoute/${jediId}`)
  .then(res => {
    setBounty(prevJedi => prevJedi.filter(jedi => jedi._id !== jediId))
  })
  .catch(err => console.log(err))
}

/*  This will edit the data by receiving the input and the ID  */
function editJedi(updateJedi, jediId){
  axios.put(`/bountyRoute/${jediId}`, updateJedi)
  .then(res => {
   /* This will loop over all the data if the Id not match keep it if it does replaced the data */
    setBounty(prevJedi => prevJedi.map(jedi => jedi._id !== jediId ? jedi  : res.data))
  })
  .catch(err => console.log(err))

}

/* This will call all the data that is manipulated in the backend (API) */
  useEffect(() => { 
  getBounties()

  },[]) 

  return (
    <div>
    <Header 
    /* The submit btn we are telling it to add the movie */
  submit={addingNewJedi}
  /*  by using props we are updating Header.js (btnText) */
  btnText="Add Jedi"
    />
    <div className="jedi-container">
  {bountyRoute.map(bountyRoute => <Jedi {...bountyRoute} key={bountyRoute._id} deleteJedi={deleteJedi} editJedi={editJedi}/>) }
  
  </div>
  </div>
  );
}



