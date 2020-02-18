import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

// The Yelp API will return a list of businesses to App.js (our React "container" component). From there, we can pass the list of businesses/information to the other child components (BusinessList, Business).


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }
  
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({
        businesses: businesses,
      })
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>brange</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} /> 
      </div>
    )
  };
}

export default App;