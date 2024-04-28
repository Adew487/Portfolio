import React, { useEffect, useState } from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from './ProgressBar';


const Profile = ({ resumeSectionRef }) => {

    return (
        <section id='summary' ref={resumeSectionRef}>
            <div className="container" >
                <div className="row">
                    <div className="about-item p-5">
                        <div className='text-center mb-5'>
                            <span>Resume</span>
                            <h2 className='mt-2' data-aos='fade-up'
                                data-aos-duration='800'
                                data-aos-once='true'
                                data-aos-delay='200'>A summary of My Resume</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 pe-5">
                        <div className='re-data' id='bdPm' data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='300'
                        >
                            <h2 className='mb-lg-4 mb-md-4 mb-4'>My Education</h2>
                            <div className='border-start border-2 border-primary ps-3'>
                                <h3>Bachelor of Business & Information Technology</h3>
                                <h6 className='mb-0'>University of Engineering and Technology, Lahore</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2019 - 2023</small>
                                <p className='mt-1'>I graduated in 2023 with a Bachelor's in Business Information Technology (BBIT).
                                    During my academic journey from 2019 to 2023, I gained valuable insights into
                                    the world of technology, business processes, and data management, preparing me
                                    for a promising career in the dynamic field of IT and business integration.</p>
                                <hr className='my-4' />
                                <h3>Fsc. Pre Engineering</h3>
                                <h6 className='mb-0'>Govt. M.A.O College, Lahore</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2017 - 2019</small>
                                <p className='mt-1'>I successfully completed my FSc Pre-Engineering from Govt. M.A.O College, Lahore.
                                    Throughout my time at the institution, I acquired a strong foundation in mathematics,
                                    physics, and chemistry, laying the groundwork for my passion in the field of engineering
                                    and paving the way for further academic and professional pursuits..</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                        <div className='re-data' id='bdPm' data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='400'>
                            <h2 className='mb-lg-4 mb-md-4 mb-4'>My Experience</h2>
                            <div className='border-start border-2 border-primary ps-3'>
                                <h3>Software Engineer</h3>
                                <h6 className='mb-0'>UBL - United Bank Limited</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2023/08 - 2025/08</small>
                                <p className='mt-1'>Designed, developed, and maintained responsive web applications using .NET, ASP.NET, and MVC frameworks.
                                    Managed databases with ADO.NET, Entity Framework, SQL, and Oracle, ensuring data integrity and compliance.
                                    Expertise in a diverse technology stack including .NET, ASP.NET, ADO.NET, MVC, Entity Framework, and Web Forms.
                                    Developed and maintained banking applications on Temenos Infinity platform for optimal user experiences
                                    Conducted regular maintenance, debugging, and troubleshooting of applications for seamless functionality.</p>
                            </div>
                            <div className='border-start border-2 border-primary ps-3'>
                                <h3>Jr. Front End Developer</h3>
                                <h6 className='mb-0'>NexQuery (Pvt) Ltd</h6>
                                <small style={{
                                    fontWeight: "400",
                                    color: "#6c757d",
                                    fontStyle: "italic"
                                }}>2022/06 - 2023/08</small>
                                <p className='mt-1'>As a junior frontend developer, I possess hands-on experience in HTML, CSS,
                                    JavaScript, ReactJS, Bootstrap, Tailwind CSS, and Sass. My skill set enables
                                    me to create engaging and responsive user interfaces, contribute to web development
                                    projects, and continually expand my knowledge to deliver innovative digital solutions.</p>
                            </div>

                        </div>


                    </div>

                </div>



                <div className="row mt-5">
                    <div className="re-data skills-section">
                        <div className="skills-header" data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                            <span className="section-tag">My Expertise</span>
                            <h2 className='mt-2'>Technical Skills</h2>
                            <p>
                                Technologies and tools I work with to design, develop and deliver
                                scalable, user-friendly applications.
                            </p>
                        </div>

                        <div className="skills-grid">
                            {[
                                {
                                    title: "Frontend",
                                    icon: "💻",
                                    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Sass"],
                                },
                                {
                                    title: "Backend",
                                    icon: "⚙️",
                                    skills: ["C#", ".NET", "ASP.NET MVC", ".NET Core", "Web API", "ADO.NET", "Entity Framework"],
                                },
                                {
                                    title: "Databases",
                                    icon: "🗄️",
                                    skills: ["SQL Server", "Oracle", "MySQL", "MongoDB", "Stored Procedures", "Query Optimization"],
                                },
                                {
                                    title: "Tools & Workflow",
                                    icon: "🛠️",
                                    skills: ["Git", "GitHub", "Bitbucket", "Jira", "Visual Studio", "Agile / Scrum"],
                                },
                                {
                                    title: "Banking Platforms",
                                    icon: "🏦",
                                    skills: ["Temenos Infinity", "Kony Visualizer", "Temenos Fabric", "CLM Digital Onboarding"],
                                },
                                {
                                    title: "Cloud & APIs",
                                    icon: "☁️",
                                    skills: ["Azure Fundamentals", "REST APIs", "Microservices", "API Integration", "JSON", "Postman"],
                                },
                            ].map((item, index) => (
                                <div
                                    className="skill-card"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-once="true"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="skill-icon">{item.icon}</div>
                                    <h3>{item.title}</h3>
                                    <div className="skill-line"></div>

                                    <div className="skill-tags">
                                        {item.skills.map((skill, i) => (
                                            <span key={i}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className='d-flex justify-content-center wow'>
                    <Nav.Link as="a" download="AdeelNaveed.pdf" href={'AdeelNaveed.pdf'} id="resume">Download Resume</Nav.Link>
                </div>
            </div>
        </section >
    )
}

export default Profile
