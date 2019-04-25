import React, { Component } from 'react';

import Header from './common/header';
import GiphyList from './giphy-list/giphy-list';


export default class App extends Component {

  /**************************************
   * LIFECYCLE
  **************************************/
  render(){
    return(
      <div className='app'>
        <Header />

        <GiphyList />
      </div>
    )
  }
}