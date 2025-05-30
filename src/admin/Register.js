import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress]= useState('')

    const navigate = useNavigate()


    const submitForm = (e) => {
        e.preventDefault()
        axios.post('https://finalmernbackend-sozm.onrender.com/signup', {name, email, phone, password, address})
        .then((res) => {
            alert("Registration Successful")
            navigate('/admin')
            // setName('')
            // setEmail('')
            // setPhone('')
            // setPassword('')
            // setAddress('')
        })
        .catch((error) =>{
            alert("Registration Failed")
        })
        
    }

    return (
        <>
        <section className={adminstyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1>Registeration Page</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>

                    </div>
                    <div className='col-md-4'>
                        <div className= {adminstyles.bx_shadow}>
                            <form onSubmit={submitForm}>
                                <div className='form-group mb-3'>
                                    <label for = 'name'>Name</label>
                                    <input type='text' placeholder='Enter Name' id='name' value={name} onChange={(e)=> setName(e.target.value)} className='form-control mt-2' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label for = 'email'>Email</label>
                                    <input type='email' placeholder='Enter Email' id='email' value={email} onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }} className='form-control mt-2' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label for = 'phone'>Contact No</label>
                                    <input type='text' placeholder='Enter Contact No' id='phone' value={phone} onChange={(e)=> setPhone(e.target.value)} className='form-control mt-2' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label for = 'email'>Password</label>
                                    <input type='password' placeholder='Enter Password' id='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form-control mt-2' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label for = 'address'>Address</label>
                                    <input type='text' placeholder='Enter Address' id='address' value={address} onChange={(e)=> setAddress(e.target.value)} className='form-control mt-2' />
                                </div>
                                <div className='form-group mb-3'>
                                    <input type='submit' value='Register' className='btn btn-primary mt-2'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </section>
        </>
    )
}

export default Register
