import React, { useState } from 'react'
import innerstyle from './innerpages.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import axios from 'axios'


const ContactUs = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitEnquiry = (e) => {
        e.preventDefault()
        axios.post(`https://finalmernbackend-sozm.onrender.com/contactus`, { name, phone, email, subject, message} )
        .then((res) => {
            alert("Messsage sent successfully")
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
            setSubject('')
        })
      .catch((error) => {
        alert("something went wrong")
      })
    }
    
    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`pt-5 pb-5 ${innerstyle.contactus}`}>
                <div className="container">
                    <div className="row justify-content-center">
                       { /* Form Section */}
                        <div className="col-lg-6 col-md-7 mb-4 me-lg-5">
                            <div className={innerstyle.bx_shadow}>
                                <form onSubmit={submitEnquiry}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type='text' value={name} className='form-control mb-3' onChange={(e)=> setName(e.target.value)} placeholder='Name' name='name' />
                                        </div>
                                        <div className="col-md-6">
                                            <input type='text' value={email} placeholder='Email' className='form-control' onChange={(e)=> setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                        <input type='text' value={phone} placeholder='Phone' className='form-control mb-3' onChange={(e)=> setPhone(e.target.value)} />

                                        </div>
                                        <div className="col-md-6">
                                        <input type='text' value={subject} placeholder='Subject' className='form-control' onChange={(e)=> setSubject(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea name='message' value={message} placeholder='message' className='form-control mb-4' onChange={(e)=> setMessage(e.target.value)}>
                                            </textarea>
                                        </div>
                                    </div>
                                    {/* Optional submit button */}
                                    <div className= {`text-end ${innerstyle.submitbtn}`}>
                                        {/* <button type="submit">Send </button> */}
                                        <input type='submit'  className='btn btn-primary' />
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className={`col-lg-4 col-md-5 ${innerstyle.info}`}>
                            <h6>Health Plus</h6>
                            <p>C2, Amrutha hills, Kothrud</p>
                            <p>Officers Colony, </p>
                            <p>Pune, Maharashtra - 411041</p>
                            <p><LocalPhoneIcon /> +91 89853 18181</p>
                            <p><LocalPhoneIcon /> +91 89854 18181</p>
                            <p><EmailIcon /> info@Healthplus.com</p>
                            <div className={innerstyle.mapContainer}>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17006109498!2d73.69815320294433!3d18.52454503913334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1746025555469!5m2!1sen!2sin" 
                                    style={{ border: 0, width: '100%', height: '200px' }}
                                    allowFullScreen="" 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUs
