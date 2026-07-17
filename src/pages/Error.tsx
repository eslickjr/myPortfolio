import { useRouteError, Link } from 'react-router-dom';
import '../styles/Error.css';

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="errorDetail">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="errorHome">
        Back to Portfolio
      </Link>
    </div>
  );
}