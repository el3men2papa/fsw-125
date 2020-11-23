import React, {useState} from "react"
import Header from "./Header"




export default  function Jedi(props){
    console.log(props)
    const {FirstName, LastName, Living, BountyAmount, Type, _id} = props
    /* This is a toggle to be able to switch the form with in the edit */
    const [ediToggle, setEditToggle] = useState(false)
    return(
        <div className="jedi">
            { !ediToggle ?
            <> {/* This is an invisible div */}
        <p>Jedi Name: {FirstName} {LastName}</p>
    <p>Bounty Credits: {BountyAmount}</p>
    <p>Is the {Type} alive? {Living}</p>
    <p>Bounty claim ID {_id}</p>
    <button
    className="delete-btn"
    onClick={() => props.deleteJedi(_id)}>Delete</button>
    {/* This button is to toggle into the form when they hit edit */}
    <button 
    className="edit-btn"
    onClick={() => setEditToggle(prevToggle => !prevToggle)}
    >Edit</button>
    </>

:

    <>
    <Header 
    /* This is the edit (put) form by using the same form from post */
    FirstName= {FirstName}
    LastName= {LastName}
    Living= {Living}
    BountyAmount= {BountyAmount}
    _id={_id}
    /* This is the btn to submit the update the edit */
    btnText="Update Baunty Info"
    /* This is the function to submit the update the edit */
    submit={props.editJedi}
    />
    {/* This button is to toggle back to the original data */}
    <button
    className="close-btn"
    onClick={() => setEditToggle(prevToggle => !prevToggle)}
    >Close</button>
    </>
            }
        </div>
    )
}

