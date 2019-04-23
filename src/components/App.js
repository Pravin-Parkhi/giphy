import React, { Component } from 'react';

import Header from './common/header';
import GiphyList from './giphy-list/giphy-list';


export default class App extends Component {

  render(){
    console.log(this.props.sampleResponse)
    return(
      <div className='app'>
        <Header
          searchGifCallback={(searchQuery)=> this.handleGifSearch(searchQuery)}
        />

        <GiphyList />
      </div>
    )
  }
}