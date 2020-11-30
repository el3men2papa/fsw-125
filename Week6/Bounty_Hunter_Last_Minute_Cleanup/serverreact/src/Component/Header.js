import React, {useState} from "react"

function AddJediForm(props){

/* This is receiving all input from the user also to update */
const initInputs = {
    FirstName: props.FirstName || "", 
    LastName: props.LastName || "", 
    Living: props.Living || "", 
    BountyAmount: props.BountyAmount || "", 
    Type: props.Type || ""
}
const [inputs, setInputs] = useState(initInputs)

function handleChange(i){
    const{name, value} = i.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(i){
    i.preventDefault()
    console.log(inputs)
    /* This is getting input from the user also the ID to update the propper data */
    props.submit(inputs, props._id)
    setInputs(initInputs)
}


    return (
        <form onSubmit={handleSubmit} className="Header">
           {/*  It will add what type of Jedi is */}
            <input
            type="text"
            name="Type"
            value={inputs.Type}
            onChange={handleChange}
            placeholder="Type"/>

           {/* it will add the bounty on their head */}
            <input
            type="text"
            name="BountyAmount"
            value={inputs.BountyAmount}
            onChange={handleChange}
            placeholder="Bounty"/>


          {/*   It will add the jedi First Name */}
            <input
            type="text"
            name="FirstName"
            value={inputs.FirstName}
            onChange={handleChange}
            placeholder="FirstName"/>


            {/* It will add the Jedi Last Name */}
            <input
            type="text"
            name="LastName"
            value={inputs.LastName}
            onChange={handleChange}
            placeholder="LastName"/>



            {/* It will identify if the Jedi is alive or dead */}
            <input
            type="text"
            name="Living"
            value={inputs.Living}
            onChange={handleChange}
            placeholder="Living"/>
          {/*   This is getting the btn text from App.js (btnTex) */}
            <button className="add-btn">{props.btnText}</button>
        </form>
    )
}

export default AddJediForm