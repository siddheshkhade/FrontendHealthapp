import React, { useContext, useEffect, useState } from 'react'
import adminstyles from './admin.module.css'
import AdminSidebar from './AdminSidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { store } from '../App'
import axios from 'axios'

const AdminDashboard = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        // passing the token throgh headers
        axios.get(`https://finalmernbackend-sozm.onrender.com/admindashboard`, {
            headers: {
                "x-token": token
            }
        })
        .then((res) => {
            setData(res.data)
            
        })
        .catch((err) => {
            alert(err)
        })

    })
// if no token navigate to "login" page
    if(!token) {
        navigate("/admin")
    }

  return (
    <main>
        <section className={adminstyles.breadcrumb}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <h1>{data} Dashboard</h1>
                    </div>
                </div>
            </div>
        </section>
        {/* top space between header and breadcrumb */}
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <AdminSidebar />
                    </div>
                    <div className='col-md-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default AdminDashboard