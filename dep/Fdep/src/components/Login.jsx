import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const { email, password } = formData
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:9000/api/userData/login", formData)
    if (response.data.success === true) {
      localStorage.setItem("token",response.data.token)
      // toast.success(response.data.message)
      navigate("/checkout")
    }
    else {
      toast.warning(response.data.message)
    }

  }

  return (
    <form className=' d-flex justify-content-center flex-column align-items-center' onSubmit={onSubmit}>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" name='email' value={email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Password</label>
        <input type="password" name='password' value={password} className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={onChange} />
      </div>
      Dont Have a account Click to Sign Up?<Link to="/signup">Sign Up</Link>
      <button className='loginbtn'>Login</button>

    </form>
  )
}

export default Login