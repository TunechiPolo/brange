/**
 * The search bar communicates with the Yelp API.
 * Requests to the Yelp API must follow formatting and naming conventions set by the API: https://www.yelp.com/developers/documentation/v3/business_search
 * For example, the search bar should allow users to search businesses by: Best Match, Highest Rated, Most Reviewed.
 * An object (sortByOptions) with keys and values will be used to conform to what the API expects to receive.
 */

 import React from 'react';
 import './SearchBar.css';

 const sortByOptions = {  // 3 keys are set for this object, below. The "sort_by" entry, in the above documentation link, was used to set the values for the below keys:
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
 
 }

 class SearchBar extends React.Component {
     // renderSortByOptions() method is to dynamically create the list items needed to display the 3 sort options above. It will help to future-proof against potential changes to the Yelp API.
     // The method iterates through the keys and values of the sortByOptions object and return a list item. The list item elements use the keys as an attribute, and the values as content.
     renderSortByOptions() {
         return Object.keys(sortByOptions).map(sortByOption => { 
             // Object.keys(sortByOptions) accesses the keys of the object.
             // .map() iterates through the accessed keys.
             // Passed in a callback function to the .map() method as an argument. 1 parameter 'sortByOption' and uses arrow function syntax.
             const sortByOptionValue = sortByOptions[sortByOption]; // Stores object values in a variable.
                return <li key={sortByOptionValue}>{sortByOption}</li>
         }); 

     }
     render() {
         return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
            </div>
         );
     }
 }

 export default SearchBar;