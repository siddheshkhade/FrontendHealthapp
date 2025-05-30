import React, { useEffect, useState } from "react";
import innerstyle from './innerpages.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import axios from "axios";
import useCustomHook from "./CustomHook";
const Offers = () => {
    const offer = useCustomHook(`https://finalmernbackend-sozm.onrender.com/offers`)
    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                <Container maxWidth="sm" className="text-center">
                    <Grid size={12}> 
                        <h1>Offers</h1>
                    </Grid>
                </Container>
            </section>

            <section className={`pt-4 pb-2 ${innerstyle.offer}`}>
                <Container maxWidth = "sm" className="p-0">
                  {
                    offer.map((off, index) => {
                        return(
                            <Grid size = {4} key={index}>
                                <div className= {`mb-4 ${innerstyle.box_shadow}`}>
                                  <p className="text-center">{off.oname}</p>  
                                  <p className="text-light fs-5">{off.odesc}</p>
                                </div>
                            </Grid>
                        )
                    })
                  }
                </Container>
            </section>
        </main>
    )
}
export default Offers;