import React from "react";
import { useState } from "react";

function Contact() {

  const [data, setData] = useState({
    fullname:"",
    phone:"",
    email:"",
    message:""
  })

  const InputEvent = (event)=>{
     const {name, value} = event.target;

      setData((preVal)=>{
        return {
          ...preVal,
          [name] : value,
        }
      })
  } 

   const formSubmit = (e)=>{
       e.preventDefault();
       alert(`My name is ${data.fullname}. my mobile number is ${data.phone}. my email id is: ${data.email} and my message is ${data.message} `);
   }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputNumber"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                   placeholder="Mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="exampleInputTextarea"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
