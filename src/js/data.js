import config from './config';
import model from './model';

let searchParam = ''; // will come from the controller (router) eventually

/**
  * Main data object
  *
  */
 let data = {};

 /**
   * Calls initial data methods
   *
   */
 data.init = function () {
    data.fetchData();
 }

/**
 * Fetch the data from the API
 *
 * @return {Object} data
 */
data.fetchData = function () {
    fetch( config.apiRoot + searchParam + config.apiKey )
    .then( response => {
        if ( response.status !== 200 ) {
            console.log( 'Problem! Status Code: ' + response.status );
            return;
        }

        return response.json();
    })
    .then ( data => {
        model.render( data );
    })
    .catch( function( err ) {
        console.log( 'Error: ', err );
    });
}

export default data;