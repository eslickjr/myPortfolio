import "../styles/Timeline.css";

import { useState, useEffect, useRef } from "react";

const Timeline = () => {
    // Filter state for business timeline events
    const [businessFilter, setBusinessFilter] = useState(true);
    // Filter reference for business timeline events
    const businessRef = useRef<boolean>(true);
    // Filter state for family timeline events
    const [familyFilter, setFamilyFilter] = useState(false);
    // Filter reference for family timeline events
    const familyRef = useRef<boolean>(false);
    // Filter state for education timeline events
    const [educationFilter, setEducationFilter] = useState(true);
    // Filter reference for education timeline events
    const educationRef = useRef<boolean>(true);
    // State to track if the timeline elements are in view
    const [inView, setInView] = useState<boolean[]>([]);
    // Reference to track the timeline elements
    const viewRef = useRef<HTMLDivElement[]>([]);
    // State to track whether elements on the page have mounted
    const [loaded, setLoaded] = useState(false);

    // Effect to handle the intersection observer for the timeline events
    useEffect(() => {
        // Get all timeline event container elements
        const timelineEvents = document.querySelectorAll(".timelineEventContainer") as NodeListOf<HTMLDivElement>;

        // Set a timeout to update the loaded state after a short delay of 10ms
        // This is a workaround for the issue where the elements are not in view when the component mounts
        const timeout = setTimeout(() => {
            // Set the loaded state to true
            setLoaded(true);
        }, 10);

        // Initialize the inView state to an array of false values based on the number of timeline events
        // This is done to ensure that the inView state is updated correctly when the component mounts
        setInView(new Array(timelineEvents.length).fill(false));

        // Create a new IntersectionObserver instance
        // This observer will be used to track when the timeline events come into view
        const observer = new IntersectionObserver(
            // This callback function is called when the observer detects that an element is in view
            // It takes an array of IntersectionObserverEntry objects as its argument
            (entries) => {
                // Loop through each entry in the entries array
                entries.forEach((entry) => {
                    // This checks if the element is intersecting with the page
                    if (entry.isIntersecting) {
                        // If the element is in view, we loop through the viewRef array to find the index of the element that is in view
                        viewRef.current.forEach((element, index) => {
                            // Compare the element in the viewRef array with the entry target
                            if (element === entry.target) {
                                // If they match, we update the inView state to set the corresponding index to true
                                // This will trigger a re-render of the component and update the class of the element to "inView"
                                setInView((prev) => {
                                    // Create a new array based on the previous state
                                    const newInView = [...prev];
                                    // Update the index of the element that is in view to true
                                    newInView[index] = true;
                                    // Return the new array
                                    return newInView;
                                });
                            }
                        });
                        // Unobserve the entry target to stop observing it
                        observer.unobserve(entry.target);
                    }
                });
            },
            // This sets the threshold of how much of the object needs to be seen before it is considered in view
            { threshold: 0.1 }
        );

        // Loop through each timeline event element and observe it with the observer
        timelineEvents.forEach((element) => {
            // Set the view reference to the element to match when looping through the observer entries
            viewRef.current.push(element);
            // Observe the element with the observer
            observer.observe(element);
        });

        // Cleanup function to unobserve the elements and clear the timeout
        return () => {
            // Unobserve all the timeline event elements
            timelineEvents.forEach((element) => {
                // Unobserve the element with the observer
                observer.unobserve(element);
            });
            // Clear the view reference to reset it
            viewRef.current = [];
            // Clear the timeout to prevent memory leaks
            clearTimeout(timeout);
            // Set the loaded state to false to reset it
            setLoaded(false);
        }
        // Rerun the effect when the filters change
    }, [familyFilter, businessFilter, educationFilter]);

    // Function to handle the checkbox change event
    const handleCheckboxChange = (filterName: string) => {
        // Get the checkbox element by its ID
        const checkbox = document.getElementById(filterName) as HTMLInputElement;

        // Check if the checkbox element exists
        if (checkbox) {
            // Check if the filter being changed is business
            if (filterName === "businessFilter") {
                // Set the business filter reference to the opposite of its current value
                businessRef.current = !businessRef.current;
                // Update the business filter state to match the reference
                setBusinessFilter(businessRef.current);
            }
            // Check if the filter being changed is family
            if (filterName === "familyFilter") {
                // Set the family filter reference to the opposite of its current value
                familyRef.current = !familyRef.current;
                // Update the family filter state to match the reference
                setFamilyFilter(familyRef.current);
            }
            // Check if the filter being changed is education
            if (filterName === "educationFilter") {
                // Set the education filter reference to the opposite of its current value
                educationRef.current = !educationRef.current;
                // Update the education filter state to match the reference
                setEducationFilter(educationRef.current);
            }
        }
    }

    const timelineElements = () => {
        interface TimelineEvent {
            icon: string;
            role: string;
            location: string;
            tools: string;
            toolsIcon: string;
            description: string;
            date: string;
        }

        const tlData: TimelineEvent[] = [
            {
                icon: "business",
                role: "I.T. Application Support Analyst",
                location: "World Acceptance, Greenville, SC",
                tools: "Selenium, SOAP U.I., SQL, Excel, CI/CD, Azure",
                toolsIcon: "toolsIcon",
                description: "Participate in board meetings for upcoming rollouts, assist with pragmatic developmental changes on current softwares. Offer highest level of support for all applications. Assisted in restructure of support work flow. Educate service desk member to handle low level support for applications",
                date: "Apr 2024 - Present",
            },
            {
                icon: "education",
                role: "Full Stack Developer Certificate",
                location: "University of North Carolina Charlotte",
                tools: "HTML5, CSS3, Javascript ES6+, Insomnia, React, Node.js, Express, MongoDB, Postgres DB, Python, Flask, CI/CD, Cypress, Typescript, OpenAI",
                toolsIcon: "educationIcon",
                description: "Completed a 6 month bootcamp to learn full stack development and methodologies with stacks like FReMP, PERN, and MERN stacks.",
                date: "Jul 2024 - Jan 2025",
            },
            {
                icon: "family",
                role: "Daughter's Birth",
                location: "Patewood, Greenville, SC",
                tools: "Natalie",
                toolsIcon: "bottleIcon",
                description: "Brought my beautiful daughter into this world on December 5th, so now I share the day of the month with her and the month with my son.",
                date: "Dec 5th 2024",
            },
            {
                icon: "business",
                role: "I.T. Support Analyst",
                location: "World Acceptance, Greenville, SC",
                tools: "SOAP U.I., Postman, Selenium, SQL, Excel, Apache JMeter, Azure, Practitest",
                toolsIcon: "toolsIcon",
                description: "Started T2 support for majority of production applications. Assisted with month end closes for central loan management system. Replicated production bugs with testing environment to more effectively trouble shoot.",
                date: "Feb 2021 - Apr 2024",
            },
            {
                icon: "family",
                role: "Engagement",
                location: "Universal Studios, Orlando, FL",
                tools: "Courtney",
                toolsIcon: "ringIcon",
                description: "Took a trip to Universal Studios with Courtney and proposed to her in front of the Hogwarts Castle. She was able to guess what was going on, but not that her whole family and my family would be there.",
                date: "Sep 24th 2021",
            },
            {
                icon: "family",
                role: "Son's birth",
                location: "Patewood, Greenville, SC",
                tools: "Carter",
                toolsIcon: "bottleIcon",
                description: "Brought my goofball of a son into this world. He shares his birth month with me and the day of the month with his mother.",
                date: "Jan 15th 2021",
            },
            {
                icon: "family",
                role: "Bought our house",
                location: "Simpsonville, SC",
                tools: "First Home!",
                toolsIcon: "houseIcon",
                description: "Found our dream home on a very lucky break. We were looking at homes when we found out Court was pregnant. We found a home that was at the very upper edges of our budget and managed to scoop it up before the housing prices went up, while the interest rates were at an all time low.",
                date: "Aug 29th 2020",
            },
            {
                icon: "business",
                role: "I.T. Quality Analyst",
                location: "World Acceptance, Greenville, SC",
                tools: "SOAP U.I., Selenium, SQL, Excel, Apache JMeter, Azure, Practitest",
                toolsIcon: "toolsIcon",
                description: "Assisted in rolling out new softwares with feature integration, data flow, bug fixing, and testing. Built test suites for our assortment of restful web services. Designed and ran automated testing fo multiple web applications.",
                date: "Nov 2019 - Feb 2021",
            },
            {
                icon: "business",
                role: "Branch Support Associate",
                location: "World Acceptance, Greenville, SC",
                tools: "Excel, VBA",
                toolsIcon: "toolsIcon",
                description: "Walked branches through roll-out of new loan application processes. Assisted branches with payment corrections, draw balancing, and other technical issues. Continued work on VBA projects to assist with data management and reporting.",
                date: "Aug 2019 - Nov 2019",
            },
            {
                icon: "family",
                role: "Started Relationship",
                location: "Loretto, KY",
                tools: "Courtney",
                toolsIcon: "coupleIcon",
                description: "Met Courtney at P.F. Changs and after seeing each other for a year and a half, we finally made it official on a trip to Kentucky.",
                date: "Oct 2018",
            },
            {
                icon: "business",
                role: "Customer Care Associate",
                location: "Greenville, SC",
                tools: "Excel, VBA, Customer Service",
                toolsIcon: "toolsIcon",
                description: "Started working at World Acceptance Corporation in Customer Care. I noticed the data was all over the place and started working with Excel to fix it. I then found the developer side of Excel and started using VBA to create more robust solutions.",
                date: "Aug 2018 - Aug 2019",
            },
            {
                icon: "education",
                role: "Two Years at Tech",
                location: "Greenville Technical College",
                tools: "Computer Science",
                toolsIcon: "educationIcon",
                description: "Started my journey into the world of Computer Science. I took a C programming class, and the normal core classes.",
                date: "Aug 2012 - May 2014",
            },
            {
                icon: "education",
                role: "High School Diploma",
                location: "Greenville, SC",
                tools: "Computer Science",
                toolsIcon: "educationIcon",
                description: "I took a very light software development class my freshman year. I was building games in class while they were teaching kids the basics. I graduated from Hillcrest High School where with my sights set on college for Computer Science.",
                date: "May 2012",
            }
        ];

        const tlElements: JSX.Element[] = [];
        let viewCount = 0;
        
        tlData.forEach((event, index) => {
            if (businessFilter && event.icon === "business") {
                tlElements.push(
                    <div className="timelineEventContainer" key={index}>
                        <div className={`timelineEvent rightEvent ${inView[viewCount] ? "inView" : "outView"}`}>
                            <div className="arrow"></div>
                            <div className="eventInformation">
                                <h2 className="role">{event.role}</h2>
                                <h3 className="location">{event.location}</h3>
                                <p className="tools">
                                    <div className={`${event.toolsIcon} icons`}/>
                                    {event.tools}
                                </p>
                                <p className="description">{event.description}</p>
                            </div>
                        </div>
                        <div className={`${event.icon} timelineIcon ${inView[viewCount] ? "inView" : "outView"}`}>
                            <svg className="timelineIconSVG " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/></svg>
                        </div>
                        <span className={`date ${inView[viewCount] ? "inView" : "outView"}`}>{event.date}</span>
                    </div>
                )
                viewCount += 1;
            } else if (educationFilter && event.icon === "education") {
                tlElements.push(
                    <div className="timelineEventContainer" key={index}>
                        <div className={`timelineEvent rightEvent ${inView[viewCount] ? "inView" : "outView"}`}>
                            <div className="arrow"></div>
                            <div className="eventInformation">
                                <h2 className="role">{event.role}</h2>
                                <h3 className="location">{event.location}</h3>
                                <p className="tools">
                                    <div className={`${event.toolsIcon} icons`}/>
                                    {event.tools}
                                </p>
                                <p className="description">{event.description}</p>
                            </div>
                        </div>
                        <span className={`${event.icon} timelineIcon ${inView[viewCount] ? "inView" : "outView"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/></svg>
                        </span>
                        <span className={`date ${inView[viewCount] ? "inView" : "outView"}`}>{event.date}</span>
                    </div>
                )
                viewCount += 1;
            } else if (familyFilter && event.icon === "family") {
                tlElements.push(
                    <div className="timelineEventContainer" key={index}>
                        <div className={`timelineEvent rightEvent ${inView[viewCount] ? "inView" : "outView"}`}>
                            <div className="arrow"></div>
                            <div className="eventInformation">
                                <h2 className="role">{event.role}</h2>
                                <h3 className="location">{event.location}</h3>
                                <p className="tools">
                                    <div className={`${event.toolsIcon} icons`}/>
                                    {event.tools}
                                </p>
                                <p className="description">{event.description}</p>
                            </div>
                        </div>
                        <span className={`${event.icon} timelineIcon ${inView[viewCount] ? "inView" : "outView"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/></svg>
                        </span>
                        <span className={`date ${inView[viewCount] ? "inView" : "outView"}`}>{event.date}</span>
                    </div>
                )
                viewCount += 1;
            }
        })

        return tlElements;

    }


    console.log("view: " + inView);

    return (
        <div id="timelinePage">
            <div id="timelineHeader">
                <div id="timelineTitle" className={loaded ? "loaded" : "notLoaded"}>
                    <div className="timeIcon icons"/>
                    Timeline
                    <div className="timeIcon icons"/>
                </div>
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
            </div>
            <div id="timelineContainer">
                {timelineElements()}
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