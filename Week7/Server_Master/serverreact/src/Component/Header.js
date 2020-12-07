import React, {useState} from "react"

function AddAddressForm(props){

const initInputs = {
    FirstName: props.FirstName || "", 
    LastName: props.LastName || "", 
    Address1: props.Address1 || "", 
    Address2: props.Address2 || "", 
    State: props.State || "",
    zipCode: props.zipCode || ""
}
const [inputs, setInputs] = useState(initInputs)

function handleChange(i){
    const{name, value} = i.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
}

function handleSubmit(i){
    i.preventDefault()
    console.log(inputs)
    props.submit(inputs, props._id)
    setInputs(initInputs)
}


    return (
        <form onSubmit={handleSubmit} className="Header">
            <input
            type="text"
            name="FirstName"
            value={inputs.FirstName}
            onChange={handleChange}
            placeholder="FirstName"/>

            <input
            type="text"
            name="LastName"
            value={inputs.LastName}
            onChange={handleChange}
            placeholder="LastName"/>

            <input
            type="text"
            name="Address1"
            value={inputs.Address1}
            onChange={handleChange}
            placeholder="Address1"/>

            <input
            type="text"
            name="Address2"
            value={inputs.Address2}
            onChange={handleChange}
            placeholder="Address2"/>

            <input
            type="text"
            name="State"
            value={inputs.State}
            onChange={handleChange}
            placeholder="State"/>

            <input
            type="text"
            name="zipCode"
            value={inputs.zipCode}
            onChange={handleChange}
            placeholder="zipCode"/>
            <button className="add-btn">{props.btnText}</button>
        </form>
    )
}

export default AddAddressForm