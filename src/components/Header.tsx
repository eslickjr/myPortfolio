import Navigation from './Navigation';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 60) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    navigate('/');
  }

  return (
    <header id="theHead" className={scrolled ? 'scrolled' : ''}>
      <h1 onClick={handleClick}>Joshua Eslick</h1>
      <Navigation />
    </header>
  );
}