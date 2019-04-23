import React, {Component} from 'react';
import SearchBar from './search-bar';

export default class Header extends Component {

  render(){
    return(
      <div className='header-view'>
        <div className='app-logo'>Giphy</div>
      </div>
    )
  }
}