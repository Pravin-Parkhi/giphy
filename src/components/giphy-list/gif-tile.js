import React, { Component } from 'react';
import { getBackgroundColor } from '../../utils/misc'
import { PLAY_ICON, PAUSE_ICON } from '../../constants/image-references'

export default class GifTile extends Component {
  constructor(){
    super()
    this.state = {
      isPaused: false
    }
  }

  /**************************************
   * METHODS
  **************************************/
  handlePlayClick = () => {
    this.setState({isPaused: false})
  }

  handlePauseClick = () => {
    this.setState({isPaused: true})
  }


  /**************************************
   * RENDER METHODS
  **************************************/
  renderPlayIcon(){
    return(
      <img className='icon' src={PLAY_ICON} alt='Play Icon' onClick={this.handlePlayClick} />
    )
  }

  renderPauseIcon(){
    return(
      <img className='icon' src={PAUSE_ICON} alt='Pause Icon' onClick={this.handlePauseClick} />
    )
  }

  render(){
    const { isPaused } = this.state;
    const { gif } = this.props;
    const imageCollection = gif.images;
    const gifPreview = imageCollection['fixed_width'].url;
    const gifImage = imageCollection['480w_still'].url;
    const gifWidth = imageCollection['fixed_width'].width;
    const gifHeight = imageCollection['fixed_width'].height;

    return(
      <section width={gifWidth} height={gifHeight}>
        <img className='gif' src={isPaused ? gifImage : gifPreview} alt='gif' width={gifWidth} height={gifHeight} style={{backgroundColor: getBackgroundColor()}} />
        <div className='icon-wrapper overlay'>
          { isPaused ? this.renderPlayIcon() : this.renderPauseIcon() }
        </div>
      </section>
    )
  }
}