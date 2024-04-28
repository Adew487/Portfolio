import React from 'react'
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = ({ aboutSectionRef }) => {
    return (
        <>
            <section className='section about-me' id='aboutme' ref={aboutSectionRef}>
                <div className="container">
                    <div className="about-box">
                        <div className="row">

                            <div className="col-12">
                                <div className="about-item px-lg-5 px-md-5 pt-lg-5 pt-md-5 p-3 pb-0">
                                    <div className='text-center mb-5'>
                                        <span>About Me</span>
                                        <h2 className='mt-2' data-aos='fade-up'
                                            data-aos-duration='800'
                                            data-aos-once='true'
                                            data-aos-delay='200'>Know Me More</h2>
                                    </div>
                                    <h3 data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='300'>Hi, I'm <strong>Adeel Naveed</strong></h3>
                                    <p data-aos='fade-up'
                                        data-aos-duration='800'
                                        data-aos-once='true'
                                        data-aos-delay='400'>I am a full-stack software engineer with 3+ years of experience building responsive web applications in fintech, retail, and technology. Skilled in C#, JavaScript, Node.js, ASP.NET MVC, Web Forms, Blazor, React.js, SQL Server, Oracle, and MongoDB, I create applications that combine robust functionality with seamless user experiences. Passionate about innovation, clean code, and collaborating in agile teams, I thrive on turning complex ideas into practical, high-quality solutions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row  gy-3 p-lg-5 pt-lg-3 pt-md-3 p-md-5 p-3">
                            <div className="col-lg-3 col-6 ab" data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-offset='0'
                                data-aos-delay='500'>
                                <p className='hd'>Name:</p>
                                <p className='bd'>Adeel Naveed</p>
                            </div>
                            <div className="col-lg-3 col-6 ab" data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-offset='0'
                                data-aos-delay='600'>
                                <p className='hd'>Email:</p>

                                <p className='bd'>
                                    <Link to='mailto:ranaadeel647@gmail.com'>ranaadeel647@gmail.com</Link>
                                </p>
                            </div>
                            <div className="col-lg-3 col-6 ab" data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-offset='0'
                                data-aos-delay='700'>
                                <p className='hd'>Date of birth:</p>
                                <p className='bd'>11 June, 2000</p>
                            </div>
                            <div className="col-lg-3 col-6 ab" data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-delay='800'
                                data-aos-offset='0'
                            >
                                <p className='hd'>From:</p>
                                <p className='bd'>Lahore, Pakistan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
