import React from 'react'
import Home from './pages/Home'
import { Outlet, Link } from "react-router-dom";
function App() {
  return (
    <div>
    <nav>
    <ul>
      <li>
        <Link to={`/`}>Home</Link>
      </li>
      <li>
        <Link to={`contact`}>Contact</Link>
      </li>
    </ul>
  </nav>
    <Outlet />
    </div>
  )
}

export default App