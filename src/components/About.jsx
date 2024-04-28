import React from 'react'
import { Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

const About = ({ aboutSectionRef }) => {
    return (
        <>
            <section className="section about-me" id="aboutme" ref={aboutSectionRef}>
                <div className="container">
                    <div className="about-box">


                        <div className="about-item px-lg-5 px-md-5 p-3 py-lg-5 py-md-5">

                            <div className="text-center mb-4">
                                <span>About Me</span>

                                <h2
                                    className="mt-2"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-once="true"
                                    data-aos-delay="200"
                                >
                                    Know Me More
                                </h2>
                            </div>

                            <div className="row justify-content-center">
                                <div className="col-lg-12 text-center">

                                    <h3
                                        className="about-heading"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-once="true"
                                        data-aos-delay="300"
                                    >
                                        Hi, I'm <strong>Adeel Naveed</strong>
                                    </h3>

                                    <p
                                        className="about-description"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-once="true"
                                        data-aos-delay="400"
                                    >
                                        Full Stack Software Developer with 3+ years of experience building
                                        enterprise web applications using C#, .NET, ASP.NET MVC, React.js,
                                        JavaScript, SQL Server, Oracle and MongoDB. Experienced in banking,
                                        fintech and digital onboarding platforms with a passion for clean,
                                        scalable and user-focused solutions.
                                    </p>

                                    <div className="row g-4 mt-3">

                                        <div
                                            className="col-lg-3 col-md-6 col-12"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-once="true"
                                            data-aos-delay="500"
                                        >
                                            <div className="about-card">
                                                <div className="icon-circle">
                                                    <FaUserAlt />
                                                </div>

                                                <h6>Name</h6>

                                                <p>Adeel Naveed</p>
                                            </div>
                                        </div>

                                        <div
                                            className="col-lg-3 col-md-6 col-12"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-once="true"
                                            data-aos-delay="600"
                                        >
                                            <div className="about-card">
                                                <div className="icon-circle">
                                                    <FaEnvelope />
                                                </div>

                                                <h6>Email</h6>

                                                <p>
                                                    <Link to="mailto:ranaadeel647@gmail.com">
                                                        ranaadeel647@gmail.com
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className="col-lg-3 col-md-6 col-12"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-once="true"
                                            data-aos-delay="700"
                                        >
                                            <div className="about-card">
                                                <div className="icon-circle">
                                                    <FaMapMarkerAlt />
                                                </div>

                                                <h6>Location</h6>

                                                <p>Surrey, BC, Canada</p>
                                            </div>
                                        </div>

                                        <div
                                            className="col-lg-3 col-md-6 col-12"
                                            data-aos="fade-up"
                                            data-aos-duration="800"
                                            data-aos-once="true"
                                            data-aos-delay="800"
                                        >
                                            <div className="about-card">
                                                <div className="icon-circle">
                                                    <FaBriefcase />
                                                </div>

                                                <h6>Experience</h6>

                                                <p>3+ Years</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default About
