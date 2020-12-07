import React, {useState} from "react"
import Header from "./Header"




export default  function Address(props){
    console.log(props)
    const {FirstName, LastName, Address1, Address2, State, zipCode, _id} = props
    const [ediToggle, setEditToggle] = useState(false)
    return(
        <div className="address">
        { !ediToggle ?
        <>
        <p>Name: {FirstName} {LastName} </p>
    <p>Address1: {Address1}</p>
    <p>Address2: {Address2}</p>
    <p>State: {State}</p>
    <p>Zip Code: {zipCode}</p>
    <button
    className="delete-btn"
    onClick={() => props.deleteAddress(_id)}>Delete</button>
    <button 
    className="edit-btn"
    onClick={() => setEditToggle(prevToggle => !prevToggle)}
    >Edit</button>
    </>
    
:

    <>
    <Header 
    FirstName= {FirstName}
    LastName= {LastName}
    Address1= {Address1}
    Address2= {Address2}
    State= {State}
    zipCode= {zipCode}
    _id={_id}
    btnText="Update Address"
    submit={props.editAddress}
    />
    <button
    className="close-btn"
    onClick={() => setEditToggle(prevToggle => !prevToggle)}
    >Close</button>
    <button
    className="cancel-btn"
    onClick={() => setEditToggle(prevToggle => !prevToggle)}
    >Cancel</button>
    


    </>
            }
        </div>
    )
}

