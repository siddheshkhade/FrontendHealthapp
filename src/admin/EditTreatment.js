import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import adminstyles from './admin.module.css'
import axios from 'axios'

const EditTreatment = () => {
    const {tid} = useParams()
    const [tname, setTname] = useState("")
    const[tdesc, setTdesc] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
                axios.get(`https://finalmernbackend-sozm.onrender.com/treatment/${tid}`)
                 .then((res) => {
                     setTname(res.data.tname)
                     setTdesc(res.data.tdesc)
                     // console.log(res);
                 })
                 .catch((error) => {
                alert("Unable to update")
                 })
     
    },[]) // if wou will not give empty dependecy array then you wont able to update the treatment data in the edit form
    

    const editTreatment = (e) => {
           

        e.preventDefault()
        axios.put(`https://finalmernbackend-sozm.onrender.com/treatment/${tid}`,{tname, tdesc})
        .then((res) => {
            alert("Treatment updated successfully")
            navigate(`/admindashboard/deletetreatement`)
        })
        .catch((err) => {
            alert("Unable to update the treatment")
        })
    }

  return (
<main>
           <section className={adminstyles.breadcrumb}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 text-center'>
                            <h1>Edit Treatment</h1>
                        </div>
                    </div>
                </div>
            </section>
             <div className='container py-4'>
                <div className='row'>
                    <div className='col-md-4 offset-md-4'>
                    <div className={adminstyles.bx_shadow}>
                    <form onSubmit={editTreatment}>
                        <h2 className='text-center'>Edit Treatement</h2>
                        <div className='form-group mb-4'>
                            <label htmlFor='tname' className='mb-2'> Treatment Name</label>
                            <input type='text' id='tname' name='tname' onChange={(e)=> setTname(e.target.value)} value={tname}  placeholder='Enter Treatment Name' className='form-control mb-3' />
                        </div>
                        <div className='form-group mb-4'>
                            <label htmlFor='tdesc' className='mb-2'>Description</label>
                            <textarea id='tedesc' name='tdesc' onChange={(e)=> setTdesc(e.target.value)} value = {tdesc} placeholder='Enter Treatment Description' className='form-control mb-3'></textarea>
                        </div>
                   
                        <input type='submit' value= "Edit Treatment" className='btn btn-success' />
                    </form>
                </div>
                    </div>
                </div>

             </div>
</main>
  )
}

export default EditTreatment