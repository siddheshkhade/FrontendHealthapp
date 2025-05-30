import React, { useState } from 'react'
import adminstyle from './admin.module.css'
import axios from 'axios'

const AddOffer = () => {
  const [oname, setOname] = useState('')
  const [odesc, setOdesc] = useState('')

  const submitOffer = (e) => {
    e.preventDefault()

    axios.post('https://finalmernbackend-sozm.onrender.com/offers', { oname, odesc})
    .then((res)=> {
      alert("Offer added successfully")
      setOname('')
      setOdesc('')
      
    })
    .catch((error) => {
      alert("unable to add offer")
    })
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <div className= {adminstyle.bx_shadow}>
          <form onSubmit={submitOffer}>
            <h2 className='text-center'>Add Offer</h2>
              <div className='form-group mb-4'>
                <label htmlFor='oname'>Offer Name</label>
                <input type='text' value={oname} onChange={(e) => setOname(e.target.value)} id='oname' placeholder='Enter Offer Name' className='form-control mt-3' />
              </div>
              <div>
              <label htmlFor='odesc'>Offer Details</label>
              <textarea id='odesc' name='odesc' value={odesc} onChange={(e)=> setOdesc(e.target.value)} placeholder='Enter Offer Decription' className='form-control mt-3'></textarea>
              </div>

              <input type='submit' value='Add Offer' className='btn btn-success mt-4'/>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOffer