import Navigation from './Navigation';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/Header.css';

export default function Header() {
  const navigate = useNavigate();

  useEffect(() => {
    const head = document.getElementById('theHead');

    const handleScroll = () => {
      if (window.scrollY <= 60) {
        head?.setAttribute('style', 'background: linear-gradient(to bottom, var(--main-secondary-color), rgba(0, 0, 0, 0)');
        /*for (let i = 0; i < links.length; i++) {
          links[i].setAttribute('style', 'color: black');
        }*/
      } else {
        head?.setAttribute('style', 'background: var(--main-secondary-color); border-bottom: 3px solid var(--main-accent-color)');
        /*for (let i = 0; i < links.length; i++) {
          links[i].setAttribute('style', 'color: white');
        }*/
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
    <header id="theHead">
      <h1 onClick={handleClick}>Joshua Eslick</h1>
      <Navigation />
    </header>
  );
}