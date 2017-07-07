import React, { Component } from 'react';

class CastShows extends Component {

  getCastFeed(url) {
    return true
  }

  render () {
    let castTitle = ''
    let castImg = ''
    const myCasts = this.props.myCasts
    const { castid } = this.props.match.params
    Object.keys(myCasts).map((key) => {
      if (myCasts[key].id === castid){
        castTitle = myCasts[key].title
        castImg = myCasts[key].imageLrgUrl
        this.getCastFeed(myCasts[key].url)
      }
    })
    return (
      <div className="shows">
        <div className='shows__img'>
          <img src={castImg} alt={castTitle}/>
        </div>
        <h1>{castTitle}</h1>
      </div>
    )
  }
}

export default CastShows
