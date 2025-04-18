import '../styles/About.css';

import { useEffect, useState, useRef } from 'react';

export default function About() {
    const [inView, setInView] = useState<boolean[]>([]);
    const viewRef = useRef<HTMLDivElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Get all timeline event container elements
        const stageEvents = document.querySelectorAll(".stageContainer") as NodeListOf<HTMLDivElement>;

        // Check if the stageEvents are loaded
        const timeoutId = setTimeout(() => {
            setLoaded(true);
        }, 10);

        // Initialize the inView state to an array of false values based on the number of timeline events
        // This is done to ensure that the inView state is updated correctly when the component mounts
        setInView(new Array(stageEvents.length).fill(false));

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
        stageEvents.forEach((element) => {
            // Set the view reference to the element to match when looping through the observer entries
            viewRef.current.push(element);
            // Observe the element with the observer
            observer.observe(element);
        });

        // Cleanup function to unobserve the elements and clear the timeout
        return () => {
            // Unobserve all the timeline event elements
            stageEvents.forEach((element) => {
                // Unobserve the element with the observer
                observer.unobserve(element);
            });
            // Clear the view reference to reset it
            viewRef.current = [];
            // Clear the timeout to prevent memory leaks
            clearTimeout(timeoutId);
            // Reset the loaded state to false
            setLoaded(false);
        }
    }
    , []);

    console.log(inView);

    return (
        <div className="about">
            <div id="aboutMeTitleContainer">
                <h1 id="aboutMeTitle" className={`aboutMeTitleContainer ${loaded ? "fadeIn" : ""}`}>My Programming Journey</h1>
            </div>
            <div id="earlyLifeContainer" className="stageContainer leftLife">
                <div id="earlyLifePWrapper" className="lifePWrapper">
                    <div id="earlyLifePContainer" className={`lifePContainer ${inView[0] ? "inView" : "outView"}`}>
                        <p id="earlyLife" className="lifeParagraph">
                            &emsp; &emsp; I grew up in a town called Wilkes-Barre, Pennsylvania. At around 7 years old, my parents moved me to Mauldin, South Carolina. My father had me playing tons of sports youngs, but my own personal interests always leaned towards tech. I was an avid gamer and when I was 12 year old, I stumbled on a website called BYOND Games. While playing the games, I noticed the site stating that all games on the site were made by people like me. I was intrigued and downloaded their game engine. I started with examples and just tinkering with changing things in the code to see what they changed in the game. I ended up wanting to move to 3D games and found an alternative engine called Dark Basic. This is where my programming journey truly began. 
                        </p>
                    </div>
                </div>
                <div id="earlyLifeImageContainer" className={`lifeImageContainer ${inView[0] ? "inView" : "outView"}`}>
                    <div id="earlyLifeImage" className="lifeImage"/>
                </div>
            </div>
            <div id="buddingDeveloperContainer" className="stageContainer rightLife">
                <div id="buddingDeveloperPWrapper" className="lifePWrapper">
                    <div id="buddingDeveloperPContainer" className={`lifePContainer ${inView[1] ? "inView" : "outView"}`}>
                        <p id="buddingDeveloper" className="lifeParagraph">
                            &emsp; &emsp; I started off with making modifications to the examples and seeing what it would change and then slowly started trying to alter the examples to add features of my own. I then started creating my own games and entering programming competitions. I started work on a software engine similar in concept to Unity before it was big, b/c Unreal was so expensive at the time. I got to around 126k lines of code and hope some day to re-ignite that project, but alas, life got complicated. I fell into the typical teenage drama stuff and had some family issues. My focus on software development plummeted. I ended up graduating high school and then attended a small local college called Greenville Tech with focus in Computer Science and aspirations to transfer to Clemson University. I took a C programming class while attending and was incredibly bored as they weren't teaching me anything I didn't already know. I finished my two years at Tech and was ready to transfer until I saw the price tag. Going to a university was not something a few part time jobs could afford. I foolishly decided I was too good for school, seeing as my programming class didn't teach me anything new, and would get into the field on my own. This would end up becoming one of the bigger regrets in my life.
                        </p>
                    </div>
                </div>
                <div id="buddingDeveloperImageContainer" className={`lifeImageContainer ${inView[1] ? "inView" : "outView"}`}>
                    <div id="buddingDeveloperImage" className="lifeImage"/>
                </div>
            </div>
            <div id="youngAdultContainer" className="stageContainer leftLife">
                <div id="youngAdultPWrapper" className="lifePWrapper">
                    <div id="youngAdultPContainer" className={`lifePContainer ${inView[2] ? "inView" : "outView"}`}>
                        <p id="youngAdult" className="lifeParagraph">
                            &emsp; &emsp; Coding at this point in my life took quite a large hiatus. I hopped around some typical young adult jobs, from factory work, to the service industry where I found myself at P.F. Changs and eventually met my future fiance Courtney. During this time though, I had strayed from coding. I would pick it up here and there, but hadn't fully stepped back into the shoes of a developer. I ended up luckily hearing about a job at a company called World Acceptance Corporation. I applied and got the job in Customer Care. While working there, I noticed that their data was all over the place. I figured I'd change this and started messing with Excel. I soon found the limitations of Excel functions only to learn that there was a whole developer side with VBA. This excited me, and although my skills were inevitably going to be rusty I got to work.
                        </p>
                    </div>
                </div>
                <div id="youngAdultImageContainer" className={`lifeImageContainer ${inView[2] ? "inView" : "outView"}`}>
                    <div id="youngAdultImage" className="lifeImage"/>
                </div>
            </div>
            <div id="climbingTheLadderContainer" className="stageContainer rightLife">
                <div id="climbingTheLadderPWrapper" className="lifePWrapper">
                    <div id="climbingTheLadderPContainer" className={`lifePContainer ${inView[3] ? "inView" : "outView"}`}>
                        <p id="climbingTheLadder" className="lifeParagraph">
                            &emsp; &emsp; I ended up structuring and styling sheets for all associates in the Customer Care Department and started creating a report sheet that the manager could open and see the performance of their employees. After a year in the position, I was promoted to Branch Support. I saw they had the same eronious data issue that Customer Care did and got to work on new sheets for Branch Support. I then thought that Collections and VBU could do with the same type of sheet as well. At this point, the Director of Customer Experience who was over all these departments, saw what I was doing and told me to apply for the I.T. Quality Analyst position that was opening up and that she would put in a good word for me. I applied and thanks to me already knowing the company and having some coding experience from what they could see with my VBA, they gave me a chance.
                        </p>
                    </div>
                </div>
                <div id="climbingTheLadderImageContainer" className={`lifeImageContainer ${inView[3] ? "inView" : "outView"}`}>
                    <div id="climbingTheLadderImage" className="lifeImage"/>
                </div>       
            </div>
            <div id="currentEmploymentContainer" className="stageContainer leftLife">
                <div id="currentEmploymentPWrapper" className="lifePWrapper">
                    <div id="currentEmploymentPContainer" className={`lifePContainer ${inView[4] ? "inView" : "outView"}`}>
                        <p id="currentEmployment" className="lifeParagraph">
                            &emsp; &emsp; I worked as a QA which was something I didn't even know about prior to doing it. I was excited to be back to my roots on the tech side of things though. I also picked up support for them using access to the test environments and my prior branch support experience to diagnose and replicate bugs. During Covid, we had my first child Carter, and my company did a reorg resulting in one of the most nerve wracking meetings in my life where I'm eventually told that I'll be switching teams, and getting a title change to I.T. Support Analyst. This ended up leaning more into the support side of things and less into the dev side, but I was just happy to still be with the company. I was kind of stuck on the corporate ladder at this point, b/c my direct boss over me had no idea what I did, and there were two other people under him who did exactly what he did, so they would receive the upward movement if any was available. I was starting to lose motivation, when suddenly, I got asked by the Sr Vice President of I.T. to come to his office. He then proposes a switch with me moving to a true Tier 2 support for the company and another title shift to I.T. Application Support Analyst. This was great news especially b/c the day before, we had found out my fiance was pregnant with our second child. This is my current title and although I'm grateful to the company, this shift was once again further away from the development side I've been aiming for.
                        </p>
                    </div>
                </div>
                <div id="currentEmploymentImageContainer" className={`lifeImageContainer ${inView[4] ? "inView" : "outView"}`}>
                    <div id="currentEmploymentImage" className="lifeImage"/>
                </div>
            </div>
            <div id="futureContainer" className="stageContainer rightLife">
                <div id="futurePWrapper" className="lifePWrapper">
                    <div id="futurePContainer" className={`lifePContainer ${inView[5] ? "inView" : "outView"}`}>
                        <p id="future" className="lifeParagraph">
                            &emsp; &emsp; At this point I realized, that developer dream wasn't just going to fall into my lap. I've got personal development experience and experience using QA testing tools. I knew I just need to polish off some of the rough edges from being self taught. So, I partook in a full stack web developer bootcamp at UNC Charlotte and received my certificate on January 30th, 2025. I don't want to leave my current company, but there are no software engineer positions available. That's when it clicked that I had some unfinished business. Those excel sheets in customer care were now not working at all, meaning their data was back to all over the place, and I had access to all the tools, knowledge, and databases to give them proper applications. I knew there was a gap in the companies productivity there, so instead of just applying elsewhere, I figured I would force my company to create a new position for me. I got to work and put together a Customer Care Incident application. I went back to speak with the Sr. Vice President, the same person who offered me my current position. He loved that I had a mind for innovasion and is looking into creating a position for me. That's the story up until now. I'm currently still working on my own personal application of EAT.io and the very portfolio you're reading. I've started applying outside of the company in the meantime, b/c I simply don't want to put all my eggs in one basket. I'm excited for what the future holds, because now I've got all the tools and truly feel like there's nothing I can't do. I'm feeling more motivated than ever and I know whoever finally takes the risk and gives me the chance is going to be blown away by what I can do.
                        </p>
                    </div>
                </div>
                <div id="futureImageContainer" className={`lifeImageContainer ${inView[5] ? "inView" : "outView"}`}>
                    <div id="futureImage" className="lifeImage"/>
                </div>
            </div>
        </div>
    )
}