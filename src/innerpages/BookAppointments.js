import React, { useState } from 'react'
import innerstyle from './innerpages.module.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BookAppointments = () => {
    // to get the data on the form we use multiple states with useParams try to change (tname & dname) in the routing file also
    const {tname1, dname1} = useParams()
    const [tname, setTname]= useState("" || tname1)
    const [dname, setDname]= useState("" || dname1)
    const [pname, setPname]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    const [subject, setSubject]= useState('')
    const [message, setMessage]= useState('')

    const submitBooking = (e) => {
        e.preventDefault()

        axios.post(`https://finalmernbackend-sozm.onrender.com/bookAppoitments`, {tname, dname, pname, phone, email, subject, message} )
        .then((res) => {
            alert("Appointment booked successfully")
            setTname('')
            setDname('')
            setPname('')
            setPhone('')
            setEmail('')
            setSubject('')
            setMessage('')
        })
      .catch((error) => {
        alert("Unable to do Appointment")
      })
    }

    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center'>Book Your Appointments</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`pt-5 pb-5 ${innerstyle.aboutus}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 m-auto'>
                            <div className={innerstyle.bx_shadow}>
                                <form onSubmit={submitBooking}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text'  value={tname1} onChange={(e)=> setTname(e.target.value)} className='form-control' placeholder='Enter Treatment Name' name='tname' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text'  value={dname1} onChange={(e)=> setDname(e.target.value)} className='form-control' placeholder='Enter Doctor Name' name='dname' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text' value={pname} onChange={(e)=> setPname(e.target.value)} className='form-control' placeholder='Enter Patient Name' name='pname' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text' value={phone} onChange={(e)=> setPhone(e.target.value)} className='form-control' placeholder='Enter Phone No' name='phone' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text' value={email} onChange={(e)=> setEmail(e.target.value)} className='form-control' placeholder='Enter Email' name='email' />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-3'>
                                                <input type='text' value={subject} onChange={(e)=> setSubject(e.target.value)} className='form-control'  placeholder='Subject' name='subject'/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='mb-3'>
                                                <textarea className='form-control' value={message} onChange={(e)=> setMessage(e.target.value)} name='message'  placeholder='Message'>
                                                </textarea>
                                            </div>

                                            <div className='mb-3'>
                                                <input type='submit' className='btn btn-primary'/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BookAppointments