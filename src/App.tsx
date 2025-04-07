import { Outlet } from 'react-router-dom';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="project-app">
        <Header />
        <main className="mx-3">
          <Outlet />
        </main>
    </div>
  );
}

export default App;
