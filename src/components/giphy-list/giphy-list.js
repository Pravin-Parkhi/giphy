import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGifs, fetchTags } from '../../actions/app';

import SearchBar from '../common/search-bar'

class GiphyList extends Component {

  handleGifSearch = (searchQuery) => {
    this.props.fetchGifs({searchQuery})
  }

  render(){

    return(
      <div className='giphy-list-view'>
        <div className='search-bar-wrapper'>
          <SearchBar
            searchGifCallback={(searchQuery) => this.handleGifSearch(searchQuery)}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchGifs: fetchGifs
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
