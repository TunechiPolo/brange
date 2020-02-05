import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../BusinessList/BusinessList';
import '../SearchBar/SearchBar';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

// The Yelp API will return a list of businesses to App.js (our React "container" component). From there, we can pass the list of businesses/information to the other child components (BusinessList, Business).
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business]; // creates a list of businesses using an array. other option is to repeat components in BusinessList.js.

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, and ${sortBy}`);
  }
  
  render() {
    return (
      <div className="App">
        <h1>brange</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} /> 
      </div>
    )
  };
}

export default App;