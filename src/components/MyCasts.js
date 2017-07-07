import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MyCasts extends Component {

  render() {
    const casts = this.props.myCasts
    const listItems = Object.keys(casts).map((key) =>
      <li className="cast-grid__item" key={key}>
        <Link to={`podcasts/${casts[key].id}`}>
          <img src={casts[key].imageLrgUrl} alt={key} />
        </Link>
      </li>
    )
    return (
      <ul className="cast-grid">
        { listItems }
      </ul>
    )
  }
}

export default MyCasts;
