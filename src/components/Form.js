import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Morgan");
  const [lastName, setLastName] = useState("Jason");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);



  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

function handleSubmit(event) {
  event.preventDefault();
   // first name is required
  if (firstName.length > 0) {
  const formData = { firstName: firstName, lastName: lastName };
  const dataArray = [...submittedData, formData];
  setSubmittedData(dataArray);
  setFirstName("");
  setLastName("");
  setErrors([]);
  } else {
    setErrors(["First name is required!"]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );

}
   

   const listOfSubmissions = submittedData.map((data, index)=> {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
        </div> 
        
    );
   });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
       {/* conditionally render error messages */}
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
   }


export default Form;

  // const formData = { 
  //   firstName: e.target[0].value,
  //   lastName: e.target[1].value,
  // };
  // props.sendFormDataSomewhere(formData);
  // setFirstName("");
  // setLastName("");


// export default Form;
