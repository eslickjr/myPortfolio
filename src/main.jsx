import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
