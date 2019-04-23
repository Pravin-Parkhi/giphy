import React, {Component} from 'react';


export default class SearchBar extends Component {

  handleChange = (event) => {
    const searchQuery = event.target.value
    this.props.searchGifCallback(searchQuery)
  }

  render(){
    return(
      <form className='search-bar-view'>
        <input
          className='search-input'
          type="text"
          name="search"
          placeholder="Search.."
          onChange={this.handleChange}
        />
      </form>
    )
  }
}