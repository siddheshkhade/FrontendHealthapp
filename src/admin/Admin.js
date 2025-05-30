import React, { useContext, useState } from 'react'
import adminstyles from './admin.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { store } from '../App'

const Admin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useContext(store)
    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        // console.log(email, password);
        
        axios.post(`https://finalmernbackend-sozm.onrender.com/login`, {email, password})
        .then((res) => {
            // if(res.data === 'valid') {
            //     navigate('/admindashboard')
            // }
            // else {
            //     alert('Invalid email or password')
            // }

            // Accessing jw token genrated from backend
            setToken(res.data.token)

        })
        .catch((error) => {
            alert("Error")
        })
    }
    
    if(token) {
        navigate("/admindashboard")
    }

    return (
        <main>
            <section className={adminstyles.breadcrumb}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h1>Admin Login</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className={adminstyles.bx_shadow}>
                                <form onSubmit={submitForm}>
                                    <div className="form-group mb-4">
                                        <label htmlFor='email'>Email</label>
                                        <input
                                            type='text'
                                            id='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control mt-2"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor='password'>Password</label>
                                        <input
                                            type='password'
                                            id='password'
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control mt-2"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn btn-success"
                                        />
                                    </div>
                                </form>
                                <div>
                                    <NavLink className= "float-end" to = '/register' >
                                        Click Here For New Registration?
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Admin