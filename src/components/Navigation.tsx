import { Link, useLocation} from "react-router-dom";

export default function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <nav id="theNav">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Timeline"
            className={currentPage === '/Timeline' ? 'nav-link active' : 'nav-link'}
          >
            Timeline
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/About"
            className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Hire Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}