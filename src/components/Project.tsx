import '../styles/Project.css';
import { useEffect, useState, useRef } from 'react';

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
  vertical: boolean;
}

export default function Project({ projectKey, image, name, styleProps, scrollRef, focus, dragging, url, cardDimensions, vertical }: ProjectProps) {
  const [hover, setHover] = useState('');
  const hoverRef = useRef<boolean>(false);
  const [leftHover, setLeftHover] = useState('');

  useEffect(() => {
    const projectEl = document.getElementById(`${projectKey}${name}`) as HTMLElement;

    if (dragging !== "") {
      if (hoverRef.current) {
        setLeftHover('leaving');
        setTimeout(() => {
          setLeftHover('');
        }, 300); // Delay before resetting leftHover
      }
      setHover('');
    }

    const handleHover = () => {
      if (!scrollRef) {
        if (focus === "") {
          console.log(`${projectKey}${name}`);
          setHover('focus');
          hoverRef.current = true;
        }
      }
    };
    
    const handleLeave = () => {
      console.log("leaving1");
      console.log("hover: ", hover);
      if (hoverRef.current) {
        console.log("leaving");
        setHover('');
        hoverRef.current = false;
        setLeftHover('leaving');
        setTimeout(() => {
          setLeftHover('');
        }, 300); // Delay before resetting leftHover
      }
    };

    const handleHoverLeft = (e: TouchEvent) => {
      if (hoverRef.current) {
        const rect = projectEl.getBoundingClientRect();
        const isHovering = (
          rect.top <= e.touches[0].clientY &&
          rect.bottom >= e.touches[0].clientY &&
          rect.left <= e.touches[0].clientX &&
          rect.right >= e.touches[0].clientX
        );

        if (!isHovering) {
          setHover('');
          hoverRef.current = false;
          setLeftHover('leaving');
          setTimeout(() => {
            setLeftHover('');
          }, 300); // Delay before resetting leftHover
        }
      }
    }

    projectEl.addEventListener("mouseover", handleHover);
    projectEl.addEventListener("touchstart", handleHover);
    projectEl.addEventListener("mouseout", handleLeave);
    projectEl.addEventListener("touchmove", handleHoverLeft);

    return () => {
      projectEl.removeEventListener("mouseover", handleHover);
      projectEl.removeEventListener("mouseout", handleLeave);
      projectEl.removeEventListener("touchstart", handleHover);
      projectEl.removeEventListener("touchend", handleLeave);
    };
  }, [focus, scrollRef]);

  const viewProject = (url: string) => {
    console.log("here");
    if (url) {
      setLeftHover('');
      setHover('');
      hoverRef.current = false;
      window.open(url, '_blank');
    }
  }

  return (
    <div style={vertical ? {
      position: "relative",
      width: `${cardDimensions.width}px`,
      height: `${cardDimensions.height}px`,
      marginTop: styleProps.marginLeft,
      marginBottom: styleProps.marginRight,
      marginLeft: '40px',
      marginRight: '40px',
      transform: (hover === 'focus' ? `rotate3d(0, 0, 0, 0) scale(2)` : `rotate3d(${-styleProps.yRotation * 2}, ${-styleProps.xRotation * 2}, ${-styleProps.zRotation * 2}, ${styleProps.degree}deg) scale(1)`), 
      zIndex: (hover === 'focus' ? 100 : styleProps.z)
    } : {
      position: "relative",
      width: `${cardDimensions.width}px`,
      height: `${cardDimensions.height}px`,
      marginTop: '40px',
      marginBottom: '40px',
      marginLeft: styleProps.marginLeft, 
      marginRight: styleProps.marginRight, 
      transform: (hover === 'focus' ? `rotate3d(0, 0, 0, 0) scale(2)` : `rotate3d(${styleProps.xRotation}, ${styleProps.yRotation}, ${styleProps.zRotation}, ${styleProps.degree}deg) scale(1)`), 
      zIndex: (hover === 'focus' ? 100 : styleProps.z)
    }} id={`${projectKey}${name}`} className={`project ${styleProps.opacity} ${hover} ${leftHover}`} onTouchEnd={() => { if (hoverRef.current) viewProject(url); }} onClick={() => { if (hoverRef.current) viewProject(url); }}>
      <img className="projectImg" src={image} alt={name} />
      <div className="projectHeaderContainer">
      <div className="projectHeader">{name}</div>
      </div>
      {/*<p>{description}</p>*/}
    </div>
  );
}