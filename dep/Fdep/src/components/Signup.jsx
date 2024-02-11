import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: ""
  })
  const { name, email, phone, password, cpassword } = formData;
  
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      toast.warning("Password Does not match")
    }
    else {
      const response = await axios.post("http://localhost:9000/api/userdata", formData)
      toast.success(response.data.message);
      navigate("/login")
    }


  }


  return (
    <div>
      <form className=' d-flex justify-content-center flex-column align-items-center mt-3' onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" name='name' value={name} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" name='email' value={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input type="text" name='phone' value={phone} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" name='password' value={password} className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
          <input type="password" name='cpassword' value={cpassword} className="form-control" id="exampleFormControlInput1" placeholder="Confirm password" onChange={onChange} />
        </div>
        Already have a account Click to Login?<Link to="/login">Login</Link>
        <button className='signupbtn'>Sign Up</button>

      </form>
    </div>
  )
}

export default Signup