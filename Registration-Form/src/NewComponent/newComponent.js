import React, {useState} from 'react'
import "./newComponent.css";


const Forminputs = () => {

  const[formdata, setdata]= useState({
    firstname:"",
    lastname:"",
    emailId:"",
    address:"",
    password:"",
    gender:"",

  });

  const[records, setrecords]= useState([]);

  const handleChange = (e) => {
    const name= e.target.name;
    const value= e.target.value;
    console.log(name,value);
    setdata({...formdata, [name]: value});

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecords={...formdata, id: new Date().getTime().toString()}
    console.log(records);
    setrecords([...records, newrecords]);
    console.log(records);
    setdata({firstname:"", lastname:"", emailId:"", address:"", gender:"", password:""});

  }

return (
      < div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h1 className="heading">Registration Form</h1>
        <div className="divider"></div>
        <div className="form">
          <div className="field">
            <label class="label">FirstName: </label>
            <input
              class="input"
              type="text"
              name="firstname"
              placeholder="FirstName"
              value={formdata.firstname}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="field">
            <label class="label">LastName: </label>
            <input
              class="input"
              type="text"
              name="lastname"
              placeholder="LastName"
              value={formdata.lastname}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <div className="field">
            <label class="label">Email: </label>
            <input 
                class="input"
                type="text"
                placeholder="Email" 
                name="emailId"
                value={formdata.emailId} 
                onChange={handleChange}/>
          </div>
          <br></br>
          <div className="field">
            <label class="label">Address: </label>
            <input 
                 class="input"
                 type="text"
                 placeholder="Address" 
                 name="address" 
                 value={formdata.address}  
                 onChange={handleChange}/>
            </div>
            <br></br>
            <div className="field">
             <label class="label">Gender: </label>
             <select class="input"
              onchange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="transgender">Transgender</option>
                <option value="other">Other</option>
              </select>
            </div>
            <br></br>
          <div className="field">
            <label class="label">Password: </label>
            <input
              class="input"
              type="password"
              name="password"
              placeholder="Password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>
          <br></br>
          <button type="submit" className="buttonsubmit">Submit</button>
        </div>

      </form>
      <div>
        {
          records.map((curElem)=>{
            return(
              <div className="showdata">
                <p>{curElem.firstname}</p>
                <p>{curElem.lastname}</p>
                <p>{curElem.emailId}</p>
                <p>{curElem.address}</p>
                <p>{curElem.gender}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>

 </div>
 

 
    )
  }


export default Forminputs;
