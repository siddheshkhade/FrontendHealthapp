import React, { useState } from 'react'
import adminstyles from './admin.module.css'
import axios from 'axios'

const AddTreatment = () => {
    const [tname, setTname] = useState('')
    const [tdesc, setTdesc] = useState('')
    const [image, setImage]= useState('')
    // to upload the file you have to use FormData class
    const formdata = new FormData()
    // const changeImage = (e) => {
    //     console.log(e.target.files[0]);
        
    // }
    const submitTreatment = (e) => {
        e.preventDefault()

           
      
            formdata.append('image', image)
            formdata.append('tname', tname)
            formdata.append('tdesc', tdesc)


    
        axios.post(`https://finalmernbackend-sozm.onrender.com/treatment`, formdata)
        .then((res) => {
            alert("Treatment added successfully")
            setTname('')
            setTdesc('')
        })
        .catch((error) => {
            alert("Unable to add treatment")
        })
 
    }
  return (
   <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-2'>
    <div className={adminstyles.bx_shadow}>
        <form onSubmit={submitTreatment} >
            <h2 className='text-center'> Add Treatement</h2>
            <div className='form-group mb-4'>
                <label htmlFor='tname' className='mb-2'> Treatment Name</label>
                <input type='text' id='tname' name='tname' value={tname} onChange={(e)=> setTname(e.target.value)} placeholder='Enter Treatment Name' className='form-control mb-3' />
            </div>
            <div className='form-group mb-4'>
                <label htmlFor='tdesc' className='mb-2'>Description</label>
                <textarea id='tedesc' name='tdesc' value={tdesc} onChange={(e)=> setTdesc(e.target.value)} placeholder='Enter Treatment Description' className='form-control mb-3'></textarea>
            </div>
            <div className='form-group mb-4'>
                <input type='file' className='form-control mb-3' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <input type='submit' value= "Add Treatment" className='btn btn-success' />
        </form>
    </div>
   </div>
   </div>
   </div>
  )
}

export default AddTreatment