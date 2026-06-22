import Nav from 'react-bootstrap/Nav';
import ProgressBar from './ProgressBar';


const Profile = ({ resumeSectionRef }) => {

    return (
        <section ref={resumeSectionRef}>
            <div id="summary" >
                <div className="container">

                    <div className="row resume-section">
                        <div className="about-item p-5 pb-3">
                            <div className="text-center mb-5">
                                <span>Resume</span>
                                <h2
                                    className="mt-2"
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-once="true"
                                    data-aos-delay="200"
                                >
                                    A summary of My Resume
                                </h2>
                                <p className="resume-subtitle">
                                    My education and professional experience
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 pe-lg-5">
                            <div
                                className="re-data resume-data"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-once="true"
                                data-aos-delay="300"
                            >
                                <h2 className="resume-title">My Education</h2>

                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-date">2019 - 2023</div>
                                        <div className="resume-content">
                                            <h3>Bachelor of Business & Information Technology</h3>
                                            <h6>University of Engineering and Technology, Lahore</h6>
                                            <ul>
                                                <li>Focused on software development, databases and business processes.</li>
                                                <li>Completed multiple academic and final year projects.</li>
                                                <li>Built a strong foundation in IT and business integration.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="resume-item">
                                        <div className="resume-date">2017 - 2019</div>
                                        <div className="resume-content">
                                            <h3>FSc. Pre Engineering</h3>
                                            <h6>Govt. M.A.O College, Lahore</h6>
                                            <ul>
                                                <li>Studied mathematics, physics, chemistry and computer science.</li>
                                                <li>Built analytical and problem-solving skills.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 ps-lg-5 mt-lg-0 mt-md-5 mt-4">
                            <div
                                className="re-data resume-data"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-once="true"
                                data-aos-delay="400"
                            >
                                <h2 className="resume-title">My Experience</h2>

                                <div className="resume-list">
                                    <div className="resume-item">
                                        <div className="resume-date">2023 - 2025</div>
                                        <div className="resume-content">
                                            <h3>Software Engineer</h3>
                                            <h6>UBL - United Bank Limited</h6>
                                            <ul>
                                                <li>Developed banking applications using .NET, ASP.NET MVC and Web APIs.</li>
                                                <li>Worked with SQL Server, Oracle, ADO.NET and Entity Framework.</li>
                                                <li>Maintained Temenos Infinity platform for digital onboarding.</li>
                                                <li>Collaborated in Agile teams and supported production applications.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr />

                                    <div className="resume-item">
                                        <div className="resume-date">2022 - 2023</div>
                                        <div className="resume-content">
                                            <h3>Jr. Front End Developer</h3>
                                            <h6>NexQuery (Pvt) Ltd</h6>
                                            <ul>
                                                <li>Built responsive web interfaces using HTML, CSS, JavaScript and React.js.</li>
                                                <li>Integrated REST APIs and collaborated with backend developers.</li>
                                                <li>Worked with Bootstrap, Tailwind CSS and Sass.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="skills">
                <div className="container">
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
            </div>
        </section >
    )
}

export default Profile
