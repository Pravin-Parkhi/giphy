import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGifs , clearGifs } from '../../actions/app';

import SearchBar from '../common/search-bar'
import Loader from '../common/loader'
import GifTile from './gif-tile';

class GiphyList extends Component {
  constructor(){
    super()
    this.state = {
      searchQuery: '',
      offset: 0,
      limit: 25,
      timer: null
    }
  }

  /**************************************
   * METHODS
  **************************************/
  getGifs = () => {
    const { offset, limit, searchQuery } = this.state;
    this.props.fetchGifs({
      searchQuery,
      offset,
      limit
    })
  }

  handleGifSearch = (searchQuery) => {
    clearTimeout(this.state.timer);
    this.setState({searchQuery, offset: 0, limit: 25}, ()=> {
      this.props.clearGifs()
      this.getGifs()
    })
  }

  handleOnScroll = () => {
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      const { offset, limit, searchQuery } = this.state;
      let nextOffset = offset + limit;
      if(searchQuery.length){
        this.setState({offset: nextOffset}, ()=>{
          this.getGifs()
        })
      }
    }
  }

  /**************************************
   * RENDER METHODS
  **************************************/
  renderGifList(gifs){
    return(
      <div>
        <article>
          {gifs.map((gif, index) => this.renderGif(gif, index))}
        </article>
        <Loader />
      </div>
      
    )
  }

  renderGif(gif, index){
    return(
      <GifTile gif={gif} key={index} />
    )
  }

  /**************************************
   * LIFECYCLE
  **************************************/
  componentDidMount(){
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  render(){
    const { gifs } = this.props

    return(
      <div className='giphy-list-view'>
        <div className='search-bar-wrapper'>
          <SearchBar
            searchGifCallback={(searchQuery) => this.handleGifSearch(searchQuery)}
          />
        </div>
        {gifs.length ? this.renderGifList(gifs) : null}
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
    fetchGifs: fetchGifs,
    clearGifs: clearGifs
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
