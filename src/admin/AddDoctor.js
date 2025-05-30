import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios'

const AddDoctor = () => {
  const [tname, setTname] = useState("")
  const [dname, setDname] = useState("")
  const [qualification, setQualification] = useState("")
  const [exp, setExp] = useState("")
  const [address, setAddress] = useState("")

  const AddDoctor = (e) => {
    e.preventDefault()

    axios.post(`https://finalmernbackend-sozm.onrender.com/doctor` ,{tname, dname, qualification, exp, address})
    .then((res) => {
      alert("Doctor added successfully")
      setTname('')
      setDname('')
      setQualification('')
      setExp('')
      setAddress('')

    })
    .catch((error) => {
      alert("Unable to add doctor")
    })

  }

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 offset-md-2 '>
            <div className={adminstyles.dbox_shadow}>
              <form onSubmit={AddDoctor}>
                <div className='row'>
                  <div className='col-md-6'>
                    <label for='tname' className='mb-2'>Treatment Name</label>
                    <input type='text' id='tname' value={tname} onChange={(e) => setTname(e.target.value)} placeholder='Treatment Name' className='form-control mb-3' />
                  </div>
                  <div className='col-md-6'>
                    <label for='dname' className='mb-2'>Doctor Name</label>
                    <input type='text' id='dname' value={dname} onChange={(e) => setDname(e.target.value)} placeholder='Doctor Name' className='form-control mb-3' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label for='qname' className='mb-2'>Qualification</label>
                    <input type='text' id='dname' value={qualification} onChange={(e) => setQualification(e.target.value)} placeholder='Qualification' className='form-control mb-3' />
                  </div>
                  <div className='col-md-6'>
                    <label for='exp' className='mb-2'>Experience</label>
                    <input type='text' id='exp' value={exp} onChange={(e) => setExp(e.target.value)} placeholder='Experince' className='form-control mb-3' />
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <label for='address' className='mb-2'>Address</label>
                    <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Address' name='address' className='form-control mb-3' />
                  </div>
                  <div className='col-12'>
                        <input type='submit' value='Add Doctor' className='form-control mb-3 bg-success text-light' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default AddDoctor