import React from 'react'
import './App.css'
import routes from '../routes'
import { Link } from 'react-router-dom'
import AddCircle from '../assets/icons/close-icon'

const discover = ({match}) => {
  const discoverLinks = routes.map((key) =>
    <li className="list__panel" key={key.path}>
      <AddCircle/>
      <Link to={`/discover/${key.path}`} className="list__panel__link">{key.title}</Link>
    </li>
  )
  return (
    <div>
      <nav className="nav">
        <ul className="list">
          {discoverLinks}
        </ul>
      </nav>
    </div>
  );
}


export default discover;
