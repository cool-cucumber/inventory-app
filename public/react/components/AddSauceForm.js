import React, {useState} from 'react';

export const AddSauceForm = ({postSauce}) => {
// Button to submit the new hot sauce
  const [formValues, setFormValues] = useState({})
  // Keep track of the user inputs, and probably store the values
  // We're getting in, in the state of the form
  const updateFormValues = (e) => {
    const newFormValues = formValues;
    newFormValues[e.target.name] = e.target.value;
    setFormValues(newFormValues)
    console.log(formValues)
    // This ^^ is just adding the old values of state, 
    // and only updating the target of this event
  }
// First step will be to e.preventDefault()
  const submitHotSauce = (e) => {
    e.preventDefault()
    postSauce(formValues)
    {}
    // next, we want to pass up this new sauce data for our post request
    // And we'll do that through props
  }

  return <form>
    <input name="name" onChange={updateFormValues} placeholder='Hot Sauce Name'></input>
    <input name="description" onChange={updateFormValues} placeholder='Hot Sauce Description'></input>
    <input name="image" onChange={updateFormValues} placeholder='Hot Sauce Gif'></input>
    <input name="price" onChange={updateFormValues} placeholder="Hot Sauce Price"></input>
    <select onChange={updateFormValues} name="category">
      <option disabled selected>Select A Hot Sauce's Region:</option>
      <option>American</option>
      <option>American Southwest</option>
      <option>Latin</option>
      <option>Asian</option>
    </select>
    <button onClick={submitHotSauce}>Submit Hot Sauce</button>
  </form>
} 
	