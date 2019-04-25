import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGifs , clearGifs } from '../../actions/app';
import { isEqual } from 'lodash';

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
      timer: null,
      isLoaderVisible: false
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
    const { totalCount } = this.props
    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight || window.innerHeight;
    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      const { offset, limit, searchQuery } = this.state;
      const nextOffset = offset + limit;
      const gifsToBeLoadCount = nextOffset + limit;
      if(searchQuery.length && (gifsToBeLoadCount < totalCount)){
        this.setState({offset: nextOffset, isLoaderVisible: true}, ()=>{
          this.getGifs()
        })
      }
    }
  }

  /**************************************
   * RENDER METHODS
  **************************************/
  renderGifList(gifs){
    const { isLoaderVisible } = this.state;
    return(
      <div className='list-wrapper'>
        <article>
          {gifs.map((gif, index) => this.renderGif(gif, index))}
        </article>
        { isLoaderVisible && <Loader /> }
      </div>
    )
  }

  renderGif(gif, index){
    return(
      <GifTile gif={gif} key={index} />
    )
  }

  renderEmptyState(){
    return(
      <div className='empty-state-wrapper'>
        No GIFS found
      </div>
    )
  }

  /**************************************
   * LIFECYCLE
  **************************************/
  componentDidMount(){
    window.addEventListener('scroll', this.handleOnScroll);
  }

  componentDidUpdate(prevProps){
    if(!isEqual(prevProps.gifs, this.props.gifs)){
      this.setState({isLoaderVisible: false})
    }
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

        {gifs.length ? this.renderGifList(gifs) : this.renderEmptyState()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    gifs: state.gifs,
    totalCount: state.totalCount
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchGifs: fetchGifs,
    clearGifs: clearGifs
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphyList);
