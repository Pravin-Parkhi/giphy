import React, {Component} from 'react';

export default class Loader extends Component {

  /**************************************
   * LIFECYCLE
  **************************************/
  render(){
    return(
      <div className='loader-wrapper'>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}