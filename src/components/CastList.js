import React, { Component } from 'react';
import AddCastButton from './AddCastButton';
import { Link } from 'react-router-dom'

class CastList extends Component {

  render () {
      let listItems = []
      if ([this.props.match.params.genre] in this.props.topCasts) {
        const category = this.props.topCasts[this.props.match.params.genre]
        listItems = category.map((key, index) =>
        <li className='list__panel' key={key.title + index}>
          <Link to={`${this.props.match.url}/${key.id}`}>
            <picture className="list__panel__image intrinsic--square">
              <source media="(min-width: 750px)" srcSet={key.imageUrl}/>
              <img className="intrinsic-item" srcSet={key.imageUrl} alt={key.title}/>
            </picture>
            <div className='list__panel__desc'>
              <p>{index + 1}. {key.title}</p>
              <p className='list__panel__desc__sub smaller lighten'>{key.artist}</p>
            </div>
          </Link>
          <div className='list__panel__button'>
            <AddCastButton podcast={key} addToMyCasts={this.props.addToMyCasts} {...this.props}/>
          </div>
        </li>
      )
    }
    return (
      <div>
        <ul className='list'>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default CastList
