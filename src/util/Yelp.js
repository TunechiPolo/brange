const apiKey = 'wnywR2V54D5fj_loekoDupHsk6ZQxwJmg4c6-sChpEixYeYFwOtJcp73UQo_OI_duXmA7-YV4O_kteP-lvpHkZwe-UohLHD1-6bfutLkisHuEFWQrdNzVWphEhlCXnYx';

/**
 * fetch() browser API will make our requests to the Yelp API.
 * Since fetch() is a browser API, older browsers may not support it. fetch() polyfill was added to support older browsers and reach a wider audience of users.
 * "npm install whatwg-fetch --save" was ran in the brange directory to install the whatwg-fetch polyfill and add it to package.json.
 */

 // Yelp{} object stores the necessary functionality to interact with the Yelp API.
const Yelp = { 
    search (term, location, sortBy) { // retrieves search results from the Yelp API.
        // The CORS Anywhere API (below) takes requests sent to its API endpoint, make them for the requesting app with the proper permissions, and return the response back to the requesting app.
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {  // the {header:} object stores/presents the form of I.D., authorizing us to use the Yelp API.
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => { // chaining .then() converts the returned RESPONSE to JSON - to utilize our list of businesses.
            return response.json();
        }).then(jsonResponse => { // chaining another .then() to retrieve the list of businesses from the JSON RESPONSE.
            if (jsonResponse.businesses) { // "IF jsonResponse has a businesses key..."
                //... iterate through jsonResponse.businesses using .map() to return an array that has all the business' properties (i.e. name, address, etc.)...
                return jsonResponse.businesses.map(business => { 
                    console.log(business);
                    return { // The below attributes can be viewed in the jsonResponse object returned by the Yelp API.
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                });
            }
        });
    } 
};

export default Yelp;