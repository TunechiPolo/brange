import React from 'react';
import './Business.css'; // Imports the Business.css stylesheet from the Component > Business directory.

/* 
 * The <Business /> Component represents how a business will be formatted and styled. It will update dynamically using the Yelp API.
*/




class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg' alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount}</p>
          </div>
        </div>
      </div>
    )
  };
}

export default Business; // Exporting without "default" means it's a named export - then you have to import this export using its exact name.