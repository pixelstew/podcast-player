import React, { Component } from 'react'
import AddCastButton from './AddCastButton';
import CloseIcon from '../assets/icons/close-icon';
import { Link } from 'react-router-dom'

class CastDescPanel extends Component {

  render () {
    let castTitle = ''
    let castDesc = ''
    const topCasts = this.props.topCasts
    const { genre, castid } = this.props.match.params
    const find = (id) => topCasts[genre].find(obj => obj.id === id)
    const thisCast = find(castid)
    castTitle = thisCast.title
    castDesc = thisCast.desc.replace(/(\r\n|\n|\r)/g, '\n')

    return (
      <div className="description-panel">
        <Link to={`/discover/${genre}`}>
          <CloseIcon/>
        </Link>
        <h2>{castTitle}</h2>
        <p>{castDesc}</p>
        <AddCastButton podcast={thisCast} addToMyCasts={this.props.addToMyCasts} {...this.props}/>
      </div>
    )
  }
}

export default CastDescPanel
