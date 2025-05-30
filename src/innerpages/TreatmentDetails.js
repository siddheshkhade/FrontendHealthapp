import React, { useState } from 'react'
import innerstyle from './innerpages.module.css'
import { Container, Grid } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const TreatmentDetails = () => {
    // after passing tid and tname through dynamic routing we can get the doctors with the given treatments
    const { tid, tname } = useParams()
    const [data, setData] = useState("")
    // for doctor 
    const [doctor, setDoctor] = useState([]) //[empty array] beacause for one treatment there will be 'n' no of doctors are available 

    useEffect(() => {
        axios.get(`https://finalmernbackend-sozm.onrender.com/treatment/${tid}`)
            .then((res) => {
                setData(res.data)
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })

        /* hitting here doctor api based on the treatment name
        we are fetching here doctor with the associated treatmentname
         */
        //   let  tname = data.tname
        axios.get(`https://finalmernbackend-sozm.onrender.com/doctor/${tname}`)
            .then((res) => {
                setDoctor(res.data)
                // console.log(res);

            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                <Container disableGutters>
                    <Grid size={12}>
                        <h1>{data.tname}</h1>
                    </Grid>
                </Container>
            </section>

            <section className='py-4'>
                <Container disableGutters>
                    <Grid size={12}>
                        <p>
                            {data.tdesc}
                        </p>
                    </Grid>
                    
                        <Grid size={8}>
                            {
                                doctor.map((doc, index) => {
                                    return (
                                        <div className='border-bottom pb-2 my-4 d-flex justify-content-between'>
                                            <div>
                                            <h6 key={index}>{doc.tname}</h6>
                                            <h6>Name: {doc.dname}</h6>
                                            <p>Education: {doc.qualification}</p>
                                            <p>YOP: {doc.exp}</p>
                                            <p>Location: {doc.address}</p>
                                            </div>
                                            <div>
                                                {/* same apply changes in routing file  */}
                                                <NavLink to={`/bookappointment/${doc.dname}/${doc.tname}`}>
                                                    <button className='btn btn-success'>Book Appointment</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                        

                                    )
                                })
                            }
                        </Grid>
                    
                </Container>
            </section>
        </main>
    )
}

export default TreatmentDetails
