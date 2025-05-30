import { Container } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Banner from './b1.jpg'
import Grid from '@mui/material/Grid';
import innerstyle from './innerpages.module.css'
import { NavLink } from 'react-router-dom';
import useCustomHook from './CustomHook';
import { Carousel } from "antd";
const Homepage = () => {
    // const [treatment, setTreatment] = useState([])

    const treatment = useCustomHook(`https://finalmernbackend-sozm.onrender.com/treatment`)

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/treatment`)
    //         .then((res) => {
    //             setTreatment((res.data));
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // })
    return (
        <main>
            <section>
                <Container maxWidth='false' disableGutters>
                    <img src={Banner} alt='banner' className='w-100' />
                </Container>
            </section>
            
            <section className= {`py-5 ${innerstyle.subhome}`}>
                <div className='row'>
                    <div className='col-lg-12 mb-3'>
                        <h2 className='text-center'>Why Choose Us?</h2>
                    </div>    
                    <div className='col-md-3 mb-3'>
                        <div className={`card h-100 ${innerstyle.cards}`}>
                            <div className="card-body">
                                <h5 className="card-title">Highly qualified surgeons</h5>
                            </div>
                        </div>
                    </div>
                          <div className='col-md-3 mb-3'>
                        <div className={`card h-100 ${innerstyle.cards}`}>
                            <div className="card-body">
                                <h5 className="card-title">Cost effective surgeries</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-3 mb-3'>
                        <div className={`card h-100 ${innerstyle.cards}`}>
                            <div className="card-body">
                                <h5 className="card-title">24*7 Service Available</h5>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 mb-3'>
                        <div className={`card h-100 ${innerstyle.cards}`}>
                            <div className="card-body">
                                <h5 className="card-title">Patient Centric Approach</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Homepage





// <section className= {`py-5 ${innerstyle.subhome}`}>
//                 <Container disableGutters>
//                     <h1 className={innerstyle.title}>Treatements provided by HealthPlus</h1>
//                     <Grid container spacing={2}>
//                         {
//                             treatment.map((treat, index) => {
//                                 return (
//                                     <Grid size={3} key={index} className = 'me-auto'>
//                                         <NavLink to={`/treatmentDetails/${treat._id}`}>
//                                         <div className={`mb-4 ${innerstyle.bx_shadow}`}>
//                                           <p className='fs-4 text-center'>{treat.tname}</p>
//                                             <p className='text-center'>{treat.tdesc}</p>
//                                         </div>
//                                         </NavLink>
//                                     </Grid>
//                                 )
//                             })}
//                         </Grid>
//                 </Container>
//             </section>