import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}