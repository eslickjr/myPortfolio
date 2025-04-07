import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.js';
import Error from './pages/Error.js';
import Portfolio from './pages/Portfolio.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';
import About from './pages/About.js';
import Timeline from './pages/Timeline.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/timeline',
        element: <Timeline />,
      }
    ],
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
} else {
  console.error('Failed to find the root element');
}
