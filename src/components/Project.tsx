import '../styles/Project.css';
import { useEffect, useState } from 'react';

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
  projectKey: number;
  image: string;
  name: string;
  url: string;
  description?: string;
  scrollRef: boolean;
  focus: string;
  dragging: string;
  cardDimensions: { width: number; height: number };
}

export default function Project({ projectKey, image, name, styleProps, scrollRef, focus, dragging, url, cardDimensions }: ProjectProps) {
  const [hover, setHover] = useState('');
  

  useEffect(() => {
    const projectEl = document.getElementById(`${projectKey}${name}`) as HTMLElement;

    if (dragging !== "") {
      setHover('');
    }

    const handleHover = () => {
      console.log("hovering");
      console.log("scrollRef: ", scrollRef);
      if (!scrollRef) {
        console.log("focus: ", focus);
        console.log("opacity", styleProps.opacity);
        if (focus === "") {
          console.log(`${projectKey}${name}`);
          setHover('focus');
        }
      }
    };
    
    const handleLeave = () => {
      console.log("leaving");
      setHover('');
    };

    projectEl.addEventListener("mouseover", handleHover);
    projectEl.addEventListener("mouseout", handleLeave);

    return () => {
      projectEl.removeEventListener("mouseover", handleHover);
      projectEl.removeEventListener("mouseout", handleLeave);
    };
  }, [focus, scrollRef]);

  const viewProject = (url: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  }

  return (
    <div style={{
      position: "relative",
      width: `${cardDimensions.width}px`,
      height: `${cardDimensions.height}px`,
      marginLeft: (hover === 'focus' && projectKey !== 0 ? "-105px" : styleProps.marginLeft), 
      marginRight: (hover === 'focus' ? (projectKey === 0 ? "-210px" : "-105px") : styleProps.marginRight), 
      transform: `rotate3d(${styleProps.xRotation}, ${styleProps.yRotation}, ${styleProps.zRotation}, ${styleProps.degree}deg)`, 
      zIndex: (hover === 'focus' ? 100 : styleProps.z)
    }} id={`${projectKey}${name}`} className={`project ${styleProps.opacity} ${hover}`} onClick={() => { if (hover) viewProject(url); }}>
      <img className="projectImg" src={image} alt={name} />
      <div className="projectHeaderContainer">
      <div className="projectHeader">{name}</div>
      </div>
      {/*<p>{description}</p>*/}
    </div>
  );
}