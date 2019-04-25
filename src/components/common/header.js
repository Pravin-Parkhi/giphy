import React, {Component} from 'react';

export default class Header extends Component {

  /**************************************
   * LIFECYCLE
  **************************************/
  render(){
    return(
      <div className='header-view'>
        <div className='app-logo'>
          <span className='first-letter'>G</span>
          <span className='second-letter'>i</span>
          <span className='third-letter'>p</span>
          <span className='fourth-letter'>h</span>
          <span className='fifth-letter'>y</span>
        </div>
      </div>
    )
  }
}