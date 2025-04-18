import Project from "../components/Project";
import "../styles/Portfolio.css";

import { PortfolioView } from "../utils/portfolioView";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

interface StyleProps {
  marginLeft: string;
  marginRight: string;
  xRotation: number;
  yRotation: number;
  zRotation: number;
  degree: number;
  z?: number;
  opacity: string;
}

interface ProjectProps {
  styleProps: StyleProps;
  image: string;
  name: string;
  url: string;
  description?: string;
}

export default function Portfolio() {
  const tempStyleProps: StyleProps = {
    marginLeft: "20px",
    marginRight: "20px",
    xRotation: 0.5,
    yRotation: 1,
    zRotation: 0.5,
    degree: 0,
    opacity: ''
  };

  const tempProjects: ProjectProps[] = [];
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "RM Spawnpoint",
    description: "This is tool to help create a professional README.",
    image: "/img/RM Spawnpoint.png",
    url: "https://github.com/eslickjr/RMSpawnPoint"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Bankroll",
    description: "This is the manage the cost of services and how long those services last for.",
    image: "/img/Bankroll.png",
    url: "https://github.com/eslickjr/Bankroll"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Shonen Showdown",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/harrisbunn/Shonen-Showdown"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Wirefront",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/Shirishakb/WIREFRONT"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "EAT.io",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/Eatio"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Git Books",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/gitBooks"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Customer Care Incidents",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/customerCareIncidents"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Community Kan",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/communityKan"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Top Candidate",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/topCandidate"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Good to Golf",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/goodToGolf"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Git Friends",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/gitFriends"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Word Guess Game",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/word-guess-game"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Engine Index",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/Engine-Index"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Sportscast Forecast",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/SportscastForecast"
  });
  tempProjects.push({
    styleProps: tempStyleProps,
    name: "Big Boss",
    description: "Run your favorite anime characters against each other.",
    image: "/img/Shonen Showdown.png",
    url: "https://github.com/eslickjr/Big-Boss"
  });

  const scrollRef = useRef<boolean>(false);
  const [grabbed, setGrabbed] = useState<boolean>(false);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const xPos = useRef<[number | null, number | null]>([null, null]);
  const distance = useRef<number>(0);
  const [projects, setProjects] = useState<ProjectProps[]>(tempProjects);
  const portfolioView = useRef<PortfolioView | null>(null);
  const styleProps = useRef<StyleProps[]>([]);
  const [dragging, setDragging] = useState<string>('');
  const [loaded, setLoaded] = useState<boolean[]>([false, false]);
  const cardDimensions = useRef<{ width: number; height: number }>({ width: 250, height: 200 });
  const [vertical , setVertical] = useState<boolean>(false);

  const screenWidth = useRef(window.innerWidth);
  const screenHeight = useRef(window.innerHeight);

  useEffect(() => {
    const portfolioProjects = document.getElementById("portfolioProjects") as HTMLDivElement;

    if (screenHeight.current > screenWidth.current) {
      setVertical(true);
    }

    const timeoutId = setTimeout(() => {
      setLoaded([true, false]);
    }, 10);

    const timeoutId2 = setTimeout(() => {
      setLoaded([true, true]);
    }, 350);


    if (portfolioView.current === null) {
      portfolioView.current = new PortfolioView(projects, screenWidth.current, screenHeight.current);
      styleProps.current = portfolioView.current.getProjects();
      cardDimensions.current = portfolioView.current.getCardDimensions();
      setProjects(projects.map((project, i) => ({ ...project, styleProps: styleProps.current[i] })));
    }

    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      scrollRef.current = true;
      setGrabbed(true);
      if (screenHeight.current > screenWidth.current) {
        xPos.current[0] = e.clientY;
      } else {
        xPos.current[0] = e.clientX;
      }
      console.log("mouse down: ", e.clientX);
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      scrollRef.current = true;
      setGrabbed(true);
      if (screenHeight.current > screenWidth.current) {
        xPos.current[0] = e.touches[0].clientY;
      } else {
        xPos.current[0] = e.touches[0].clientX;
      }
      console.log("touch start: ", e.touches[0].clientX);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (scrollRef.current) {
        xPos.current[1] = xPos.current[0];
        if (screenHeight.current > screenWidth.current) {
          xPos.current[0] = e.clientY;
        } else {
          xPos.current[0] = e.clientX;
        }

        if (xPos.current[1] !== null) {
          distance.current = xPos.current[0] - xPos.current[1];
        }

        if (distance.current !== 0) {
          setDragging('dragging');
          setIsScrolling(true);
          portfolioView.current?.moveProjects(distance.current * -1 * 1.5);
          const newStyleProps = portfolioView.current?.getProjects();
          if (newStyleProps) {
            styleProps.current = newStyleProps;
          }
          setProjects(projects.map((project, i) => ({ ...project, styleProps: styleProps.current[i] })));
        }
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (scrollRef.current) {
        xPos.current[1] = xPos.current[0];
        if (screenHeight.current > screenWidth.current) {
          xPos.current[0] = e.touches[0].clientY;
        } else {
          xPos.current[0] = e.touches[0].clientX;
        }

        if (xPos.current[1] !== null) {
          distance.current = xPos.current[0] - xPos.current[1];
        }

        if (distance.current !== 0) {
          setDragging('dragging');
          setIsScrolling(true);
          portfolioView.current?.moveProjects(distance.current * -1 * 1.5);
          const newStyleProps = portfolioView.current?.getProjects();
          if (newStyleProps) {
            styleProps.current = newStyleProps;
          }
          setProjects(projects.map((project, i) => ({ ...project, styleProps: styleProps.current[i] })));
        }
      }
    }

    const handleMouseUp = () => {
      scrollRef.current = false;
      setIsScrolling(false);
      setGrabbed(false);
    }

    const handleTouchEnd = () => {
      scrollRef.current = false;
      setIsScrolling(false);
      setGrabbed(false);
    }

    const handleWindowResize = () => {
      setDragging('');
      if (portfolioView.current) {
        screenWidth.current = window.innerWidth;
        screenHeight.current = window.innerHeight;
        if (screenHeight.current > screenWidth.current) {
          setVertical(true);
        } else {
          setVertical(false);
        }
        portfolioView.current.resize(window.innerWidth, window.innerHeight);
        styleProps.current = portfolioView.current.getProjects();
        cardDimensions.current = portfolioView.current.getCardDimensions();
        setProjects(projects.map((project, i) => ({ ...project, styleProps: styleProps.current[i] })));
      }
    }

    portfolioProjects.addEventListener("mousedown", handleMouseDown);
    portfolioProjects.addEventListener("touchstart", handleTouchStart);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      portfolioProjects.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      setLoaded([false, false]);
      clearTimeout(timeoutId2);
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div id="portfolio">
        <div className={`aboutMe ${loaded[0] ? "fadeIn" : ""}`}>
          <div className={`aboutMeContainer ${loaded[1] ? "fadeIn" : ""}`}>
            <div id="portImageContainer">
              <div id="portImage"></div>
            </div>
            <div id="aboutMeTextContainer">
              <h1 id="aboutMeH1">Joshua Eslick - I.T. Application Support Analyst</h1>
              <p id="aboutMeP">Outgoing and personable Certified Full Stack Web Developer with 5+ years experience working with service-oriented architecture applications. Expertise and certification with PERN, MERN, and FReMP stacks. Worked in CI/CD pipeline using test driven development with tools such as Selenium, JMeter, Practitest, and SoapUI. I'm currently working on some personal applications like EAT.io and trying to completely round myself out by going through some continuation of learning courses for AWS, Java, C#, and Python.</p>
              <div className="infoLinks">
                <Link className="portButton" id="resumeLink" to="Joshua Eslick Resume.docx" download>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                  </svg>
                  Resume
                </Link>
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
          <h1 id='portfolioHeader' className={loaded[0] ? "fadeIn" : ""}>Portfolio</h1>
        </div>
        <div id="portfolioProjectsWrapper">
          <div id="portfolioProjects" className={grabbed ? "scrolling" : ""}>
            <div id="projectList" className={vertical ? "projectListVertical" : "projectListHorizontal"} style={vertical ? { height: '100%', paddingBottom: '0' } : { height: `${screenWidth.current * .44 }px`, paddingBottom: `${screenWidth.current * .12 }px` }}>
              <div id="swipeContainer" className={dragging}>
                <span id="scrollText" className={`${dragging} ${vertical ? "vertical" : ""}`}>Click and drag to scroll
                  <svg id="swipeIcon" className={dragging} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
                  </svg>
                </span>
              </div>
              {projects.map((project, i) => {
                console.log("scrollRef: ", scrollRef.current);
                
                return (
                <Project projectKey={i} {...project} scrollRef={isScrolling} focus={(styleProps.current[i]?.opacity ?? '')} dragging={dragging} cardDimensions={cardDimensions.current} vertical={vertical} />
              )})}
            </div>
          </div>
        </div>
    </div>
  );
}