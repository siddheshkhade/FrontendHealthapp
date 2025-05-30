import React from 'react'
import innerstyle from './innerpages.module.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const AboutUs = () => {
    return (
        <main>
            <section className={innerstyle.breadcrumb}>
                {/* <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div> */}

                {/* Material UI */}
                <Container maxWidth="sm">
                  <Grid container spacing={2}>
                    <Grid size = {12} className="text-center">
                        <h1>About Us</h1>
                    </Grid>
                  </Grid>
                </Container>

            </section>

            <section className= {`pt-5 pb-2 ${innerstyle.aboutus}`}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p>
                                HealthPlus is your personal health companion designed to simplify and streamline your wellness journey. From managing appointments and accessing medical records to monitoring vital signs and receiving personalized health tips, HealthEase brings the care you need right to your fingertips.
                                
                                {/* <h1 className='text-center text-primary'>Core-features</h1> */}

                                <div className='mt-4'>
                                <li>24/7 Teleconsultation with licensed healthcare providers</li>

                                <li>AI-powered Symptom Checker for instant health guidance</li>

                                <li>Medication Reminders to help you stay on track</li>

                                <li>Secure Health Records accessible anytime, anywhere</li>

                                <li>Fitness & Nutrition Tracking tailored to your goals</li>

                                <li>Mental Health Support and guided well-being programs</li>

                                </div>

                            </p>
                            <p>
                                <h6>Mission</h6>
                                 To revolutionize healthcare by providing a user-friendly platform that empowers individuals to take charge of their health and well-being.
                                To empower individuals to take control of their health through accessible, personalized, and innovative digital healthcare solutions.
                            </p>
                            <p>
                                <h6>Vision</h6>
                                 To be the leading digital health platform that transforms the way people manage their health, making quality care accessible to all.
                                To create a world where high-quality healthcare is seamlessly integrated into everyday life, ensuring healthier communities and improved well-being for all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default AboutUs
