import React, { Component } from 'react'
import CSSTransitionGroup from 'react-addons-css-transition-group';
import AddCircle from '../assets/icons/add-circle'
import CheckCircle from '../assets/icons/check-circle'

class AddCastButton extends Component {

  addToMyCasts(podcast){
    this.props.addToMyCasts(podcast)
  }

  removeFromMyCasts(podcast){
    this.props.removeFromMyCasts(podcast)
  }

  render () {
    const subscribed = this.props.podcast.title in this.props.myCasts
    return (
      <CSSTransitionGroup name="button" transitionName="button" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <button onClick={() =>  subscribed ? this.removeFromMyCasts(this.props.podcast) : this.addToMyCasts(this.props.podcast) }>
          {subscribed ? <CheckCircle/> : <AddCircle/> }
        </button>
      </CSSTransitionGroup>
    )
  }
}

export default AddCastButton
