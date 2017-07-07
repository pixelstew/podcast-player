import React, { Component } from 'react'
import CastList from './CastList';
import xml2js from 'xml2js'

class FetchCasts extends Component {

  componentDidMount () {
    const category = this.props.match.params.genre
    const catProps = this.props.routes.find(cat => cat.path === category)
    this.getCasts(catProps.genreId)
  }

  getCasts (genre){
    const request = new Request(`https://itunes.apple.com/gb/rss/toppodcasts/${genre}limit=100/explicit=true/xml`, {
      method: 'GET'
    })
    fetch(request)
      .then((response) => {
        return response.text()
      .then((text) => {
        this.parseRss(text)
      })
    }).catch((err) => {
      console.log(`Looks like we have a problem getting the podcasts: ${err}`)
    });
  }

  parseRss (text) {
    xml2js.parseString(text, (err, result) => {
      this.props.setTopCasts([this.props.match.params.genre], this.formatFeed(result.feed.entry))
    })
  }

  formatFeed (feed){
    const reformattedRss = feed.map((jsonCast) => {
      const castObj = {
        title: jsonCast['im:name'][0],
        imageUrl: jsonCast['im:image'][1]['_'],
        imageLrgUrl: jsonCast['im:image'][2]['_'],
        artist: jsonCast['im:artist'][0]['_'],
        desc: jsonCast['summary'] ? jsonCast['summary'][0] : 'Sorry this podcast has no description',
        url: jsonCast['link'][0]['$'].href,
        id: jsonCast['id'][0]['$']['im:id']
      }
      return castObj
    })
    return reformattedRss
  }

  render() {
    return (
      <div>
        <CastList {...this.props}/>
      </div>
    )
  }
}

export default FetchCasts;
