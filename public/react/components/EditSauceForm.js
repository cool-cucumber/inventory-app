import React, {useState} from 'react';

export const EditSauceForm = ({updateSauce, sauce}) => {
  const [formValues, setFormValues] = useState(sauce)
  
  const updateFormValues = (e) => {
    const newFormValues = formValues;
    // ^^ Making a copy of the state object, sauce
    newFormValues[e.target.name] = e.target.value;
    // ^
    setFormValues(newFormValues)
    console.log(formValues)
  }
  const submitHotSauce = (e) => {
    e.preventDefault()
    updateSauce(formValues)
  }

  return <form className="form details">
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
    <button onClick={submitHotSauce}>Update Hot Sauce</button>
  </form>
} 
	