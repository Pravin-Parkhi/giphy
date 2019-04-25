import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(){
    super()
    this.state = {
      searchQuery: ''
    }
  }

  /**************************************
   * METHODS
  **************************************/
  handleChange = (event) => {
    const searchQuery = event.target.value;
    this.setState({searchQuery});
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const { searchQuery } = this.state;
      this.props.searchGifCallback(searchQuery);
    }
  }

  /**************************************
   * LIFECYCLE
  **************************************/
  render(){
    const { searchQuery } = this.state
    return(
      <form className='search-bar-view' autoComplete='off'>
        <input
          className='search-input'
          type="text"
          name="search"
          placeholder="Search for gifs.."
          value={searchQuery}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </form>
    )
  }
}