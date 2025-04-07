import "../styles/Timeline.css";

import { useState } from "react";

const Timeline = () => {
    const [businessFilter, setBusinessFilter] = useState(true);
    const [familyFilter, setFamilyFilter] = useState(false);
    const [educationFilter, setEducationFilter] = useState(true);

    const handleCheckboxChange = (filterName: string) => {
        const checkbox = document.getElementById(filterName) as HTMLInputElement;
        if (checkbox) {
            if (filterName === "businessFilter") setBusinessFilter(!businessFilter);
            if (filterName === "familyFilter") setFamilyFilter(!familyFilter);
            if (filterName === "educationFilter") setEducationFilter(!educationFilter);
        }
    }

    return (
        <div id="timelinePage">
            <h1 id="timelineTitle">
                <div className="timeIcon icons"/>
                Timeline
                <div className="timeIcon icons"/>
                <div id="timelineFilters">
                    <div id="businessContainer" className="filterContainer" onClick={() => handleCheckboxChange("businessFilter")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                        <input type="checkbox" id="businessFilter" className="filterCheckbox" name="businessFilter" checked={businessFilter} />
                    </div>
                    <div id="familyContainer" className="filterContainer" onClick={() => handleCheckboxChange("familyFilter")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <input type="checkbox" id="familyFilter" className="filterCheckbox" name="familyFilter" checked={familyFilter}/>
                    </div>
                    <div id="educationContainer" className="filterContainer" onClick={() => handleCheckboxChange("educationFilter")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                        <input type="checkbox" id="educationFilter" className="filterCheckbox" name="educationFilter" checked={educationFilter}/>
                    </div>
                </div>
            </h1>
            <div id="timelineContainer">
                {businessFilter && <div className="timelineEventContainer">
                    <span className="business timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">I.T. Application Support Analyst</h2>
                            <h3 className="location">World Acceptance, Greenville, SC</h3>
                            <p className="tools">
                                <div className="toolsIcon icons"/>
                                Selenium, SOAP U.I., SQL, Excel, CI/CD, Azure
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Apr 2024 - Present</span>
                    </div>
                </div>}
                {educationFilter && <div className="timelineEventContainer">
                    <span className="education timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Full Stack Developer Certificate</h2>
                            <h3 className="location">University of North Carolina Charlotte</h3>
                            <p className="tools">
                                <div className="educationIcon icons"/>
                                HTML5, CSS3, Javascript ES6+, Insomnia, React, Node.js, Express, MongoDB, Postgres DB, Python, Flask, CI/CD, Cypress, Typescript, OpenAI
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Jul 2024 - Jan 2025</span>
                    </div>
                </div>}
                {familyFilter && <div className="timelineEventContainer">
                    <span className="family timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Daughter's Birth</h2>
                            <h3 className="location">Patewood, Greenville, SC</h3>
                            <p className="tools">
                                <div className="bottleIcon icons" />
                                Natalie
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Dec 5th 2024</span>
                    </div>
                </div>}
                {businessFilter && <div className="timelineEventContainer">
                    <span className="business timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">I.T. Support Analyst</h2>
                            <h3 className="location">World Acceptance, Greenville, SC</h3>
                            <p className="tools">
                                <div className="toolsIcon icons" />
                                SOAP U.I., Postman, Selenium, SQL, Excel, Apache JMeter, Azure, Practitest
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Feb 2021 - Apr 2024</span>
                    </div>
                </div>}
                {familyFilter && <div className="timelineEventContainer">
                    <span className="family timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Engagement</h2>
                            <h3 className="location">Universal Studios, Orlando, FL</h3>
                            <p className="tools">
                                <div className="ringIcon icons" />
                                Courtney
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Sep 24th 2021</span>
                    </div>
                </div>}
                {familyFilter && <div className="timelineEventContainer">
                    <span className="family timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Son's birth</h2>
                            <h3 className="location">Patewood, Greenville, SC</h3>
                            <p className="tools">
                                <div className="bottleIcon icons" />
                                Carter
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Jan 15th 2021</span>
                    </div>
                </div>}
                {familyFilter && <div className="timelineEventContainer">
                    <span className="family timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Bought our house</h2>
                            <h3 className="location">Simpsonville, SC</h3>
                            <p className="tools">
                                <div className="houseIcon icons" />
                                First Home!
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Aug 29th 2020</span>
                    </div>
                </div>}
                {businessFilter && <div className="timelineEventContainer">
                    <span className="business timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">I.T. Quality Analyst</h2>
                            <h3 className="location">World Acceptance, Greenville, SC</h3>
                            <p className="tools">
                                <div className="toolsIcon icons" />
                                SOAP U.I., Selenium, SQL, Excel, Apache JMeter, Azure, Practitest
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Nov 2019 - Feb 2021</span>
                    </div>
                </div>}
                {businessFilter && <div className="timelineEventContainer">
                    <span className="business timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Branch Support Associate</h2>
                            <h3 className="location">World Acceptance, Greenville, SC</h3>
                            <p className="tools">
                                <div className="toolsIcon icons" />
                                Excel, VBA
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Aug 2019 - Nov 2019</span>
                    </div>
                </div>}
                {familyFilter && <div className="timelineEventContainer">
                    <span className="family timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Started relationship</h2>
                            <h3 className="location">Courtney Schultz</h3>
                            <p className="tools">
                                <div className="coupleIcon icons" />
                                Excel, VBA
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Oct 13th 2018</span>
                    </div>
                </div>}
                {businessFilter && <div className="timelineEventContainer">
                    <span className="business timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Customer Care Associate</h2>
                            <h3 className="location">World Acceptance, Greenville, SC</h3>
                            <p className="tools">
                                <div className="toolsIcon icons" />
                                Excel, VBA
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Aug 2018 - Aug 2019</span>
                    </div>
                </div>}
                {educationFilter && <div className="timelineEventContainer">
                    <span className="education timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                    </span>
                    <div className="timelineEvent rightEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">Two years at Tech</h2>
                            <h3 className="location">Greenville Technical College</h3>
                            <p className="tools">
                                <div className="educationIcon icons" />
                                Excel, VBA
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">Aug 2012 - May 2014</span>
                    </div>
                </div>}
                {educationFilter && <div className="timelineEventContainer">
                    <span className="education timelineIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
                        </svg>
                    </span>
                    <div className="timelineEvent leftEvent">
                        <div className="arrow"></div>
                        <div className="eventInformation">
                            <h2 className="role">High School Diploma</h2>
                            <h3 className="location">Hillcrest High School</h3>
                            <p className="tools">
                                <div className="educationIcon icons" />
                                Excel, VBA
                            </p>
                            <p className="description">Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.</p>
                        </div>
                        <span className="date">2016</span>
                    </div>
                </div>}
                <div className="timelineEventContainer">
                    <span className="timelineIcon start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Timeline;