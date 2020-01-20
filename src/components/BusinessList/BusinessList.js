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
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    };
}

export default BusinessList;