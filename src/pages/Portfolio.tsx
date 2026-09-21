import Project from "../components/Project";
import "../styles/Portfolio.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProjectData {
  image: string;
  name: string;
  description: string;
  stack: string[];
  url: string;
}

const projects: ProjectData[] = [
  {
    name: "Golden Grove Bicycles",
    description: "A functional website built for a local bicycle repair shop.",
    stack: ["React", "TypeScript"],
    image: "/img/Landing.png",
    url: "https://github.com/eslickjr/ggBicycles"
  },
  {
    name: "EAT.io",
    description: "A food-focused app currently in development.",
    stack: ["React", "Node.js", "MongoDB"],
    image: "/img/eatio Landing 2.png",
    url: "https://github.com/eslickjr/Eatio"
  },
  {
    name: "Monument Builds",
    description: "The flagship site for my web-design studio, built to show range through five switchable themes.",
    stack: ["Angular", "Typescript"],
    image: "/img/Monument Builds.png",
    url: "https://github.com/eslickjr/monumentBuilds"
  },
  {
    name: "Resolv Incident Management",
    description: "Logs support incidents, links them to accounts, and tracks resolution-time stats.",
    stack: ["React", "C#", "ASP.NET Core"],
    image: "/img/Resolv.png",
    url: "https://github.com/eslickjr/resolv-incident-management"
  },
  {
    name: "Portfolio",
    description: "The portfolio site you're currently viewing.",
    stack: ["React", "TypeScript", "Vite"],
    image: "/img/portfolio.png",
    url: "https://github.com/eslickjr/myPortfolio"
  },
  {
    name: "Wirefront",
    description: "A collaborative mock website builder — drag, drop, and arrange components to prototype layouts fast.",
    stack: ["React", "Flask", "MongoDB"],
    image: "/img/wirefront.png",
    url: "https://github.com/Shirishakb/WIREFRONT"
  },
  {
    name: "Bankroll",
    description: "Tracks the cost and duration of recurring services so nothing renews unnoticed.",
    stack: ["JavaScript", "Bootstrap"],
    image: "/img/Bankroll.png",
    url: "https://github.com/eslickjr/Bankroll"
  },
  {
    name: "Shonen Showdown",
    description: "Assemble a team of anime characters and battle other players' teams.",
    stack: ["React", "Node.js", "Sequelize"],
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/harrisbunn/Shonen-Showdown"
  },
  {
    name: "Git Books",
    description: "Search, save, and manage a personal reading list using the Google Books API.",
    stack: ["React", "Node.js"],
    image: "/img/gitBooks.png",
    url: "https://github.com/eslickjr/gitBooks"
  },
  {
    name: "Community Kan",
    description: "A shared kanban board for teams to manage tickets without GitHub's permissions overhead.",
    stack: ["React", "Node.js"],
    image: "/img/Krazy Kanban Board.png",
    url: "https://github.com/eslickjr/communityKan"
  },
  {
    name: "Top Candidate",
    description: "Swipe through GitHub developer profiles to quickly shortlist potential candidates.",
    stack: ["React", "GitHub API"],
    image: "/img/githired.png",
    url: "https://github.com/eslickjr/topCandidate"
  },
  {
    name: "Good to Golf",
    description: "Checks a 5-day forecast for any city to help you decide if it's golfing weather.",
    stack: ["React", "Node.js"],
    image: "/img/forecast.png",
    url: "https://github.com/eslickjr/goodToGolf"
  },
  {
    name: "Git Friends",
    description: "A REST API that lets developers friend each other and share and react to posts.",
    stack: ["Node.js", "REST API"],
    image: "/img/gitFriends.png",
    url: "https://github.com/eslickjr/gitFriends"
  },
  {
    name: "Engine Index",
    description: "Create and manage a garage of vehicles — start, stop, tow, or pop a wheelie.",
    stack: ["Node.js", "TypeScript"],
    image: "/img/engineIndex.png",
    url: "https://github.com/eslickjr/Engine-Index"
  },
  {
    name: "Sportscast Forecast",
    description: "A weather API that delivers your 5-day forecast like a sports announcer calling the game.",
    stack: ["Node.js", "Express"],
    image: "/img/sportsCast.png",
    url: "https://github.com/eslickjr/SportscastForecast"
  },
  {
    name: "Big Boss",
    description: "Tracks employees, their roles, and reporting structure across company departments.",
    stack: ["Node.js", "PostgreSQL"],
    image: "/img/bigBoss.png",
    url: "https://github.com/eslickjr/Big-Boss"
  },
  {
    name: "RM Spawnpoint",
    description: "A tool that helps generate a professional README through a guided prompt.",
    stack: ["Node.js", "Inquirer.js"],
    image: "/img/RM Spawnpoint.png",
    url: "https://github.com/eslickjr/RMSpawnPoint"
  }
];

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoaded(true), 10);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="portfolio">
      <div className={`aboutMe ${loaded ? "fadeIn" : ""}`}>
        <div className={`aboutMeContainer ${loaded ? "fadeIn" : ""}`}>
          <div id="portImageContainer">
            <div id="portImage"></div>
          </div>
          <div id="aboutMeTextContainer">
            <h1 id="aboutMeH1">Joshua Eslick - I.T. Application Support Analyst</h1>
            <p id="aboutMeP">Outgoing and personable Certified Full Stack Web Developer with 5+ years experience working with service-oriented architecture applications. Expertise and certification with PERN, MERN, and FReMP stacks. Worked in CI/CD pipeline using test driven development with tools such as Selenium, JMeter, Practitest, and SoapUI. I'm currently working on some personal applications like EAT.io and trying to completely round myself out by going through some continuation of learning courses for AWS, Java, C#, and Python.</p>
            <div className="infoLinks">
              <a className="portButton" id="resumeLink" href="/Joshua-Eslick-Resume.pdf" download>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                Resume
              </a>
              <Link className="portButton" id="linkedLink" to="https://www.linkedin.com/in/joshua-eslick" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolioHeaderContainer">
        <h1 id="portfolioHeader" className={loaded ? "fadeIn" : ""}>Portfolio</h1>
      </div>
      <div id="projectGrid">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
  );
}
