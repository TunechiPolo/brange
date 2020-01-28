/*
  * The point of the <BusinessList /> component is to simulate what a returned list of businesses would     look like in brange (e.g. after querying the Yelp API).
  * To help this simulation, <BusinessList /> will make use of the <Business /> component repeatedly. The   <Business /> component is imported here, for that reason.
*/

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {/* .map() will iterate through the "businesses" array, and will return <Business /> components */}
                {this.props.businesses.map(function(business) { 
                    return <Business business={business} />;
                })};
            </div>
        )
    };
}

export default BusinessList;