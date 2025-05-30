import React, { useEffect, useState } from 'react'
import innerstyle from './innerpages.module.css'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import useCustomHook from './CustomHook'

const Treatment = () => {
    const treatment = useCustomHook(`https://finalmernbackend-sozm.onrender.com/treatment`)
    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h1> Treatements </h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <div className='row'>
                        {
                            treatment.map((treat, index) => {
                               return (
                                <div className='col-lg-4' key={index} >
                                    <div className={`mb-4 ${innerstyle.bx_shadow}`}>
                                        {/* take the same tname in the routing file also */}
                                        <NavLink to={`/treatmentDetails/${treat._id}/${treat.tname}`}>
                                        <h2 className='text-center'>{treat.tname}</h2>
                                        </NavLink>
                                    <img
                                    src={`https://finalmernbackend-sozm.onrender.com/uploads/${treat.filename}`}
                                    alt={treat.tname}
                                    className='img-fluid'
                                    />  
                                    </div>
                                </div>
                               
                               )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>

    )
}

export default Treatment