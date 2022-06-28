
import axios from 'axios'
import React,{useState} from 'react'
import {Container, Form , Button, Alert} from 'react-bootstrap'
import { Login } from './Login'
export const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const[login,setLogin]=useState(true)
  const[flag,setFlag]=useState(false)
  function handleFormSubmit(e)
  {
    e.preventDefault()
    if(!name || !email|| !password)
    {
      setFlag(true)
    }
    else
    {
      setFlag(false)
      localStorage.setItem('name',JSON.stringify(name))
      localStorage.setItem('email',JSON.stringify(email))
      localStorage.setItem('password',JSON.stringify(password))
      setLogin(!login)

    }
  }
  function handleClick()
  {
    setLogin(!login)
  }
  return (
    <>
              {" "}
          {login ? (
            <form onSubmit={handleFormSubmit} className='text-center'>
            <h1 className='bg-danger text-center text-white'>Registration Form</h1>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <br/>

              <button type="submit" className="btn btn-danger btn-lg btn-block">
                Register
              </button>
              <p onClick={handleClick} style={{cursor:'pointer'}} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
    </>
  )
}
