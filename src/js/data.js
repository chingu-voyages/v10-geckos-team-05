import config from './config';
import model from './model';

/**
  * Main data object
  *
  */
 let data = {};

/**
  * Firebase app specifications
  *
  */
 let firebaseConfig = {
    apiKey: "",
    authDomain: "impressions-prototype.firebaseapp.com",
    databaseURL: "https://impressions-prototype.firebaseio.com",
    projectId: "impressions-prototype",
    storageBucket: "impressions-prototype.appspot.com",
    messagingSenderId: "1092943872445",
    appId: "1:1092943872445:web:413024422bce97b6"
  };

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
    fetch( config.apiRoot + config.apiKey )
    .then( response => {
        if ( response.status !== 200 ) {
            console.log( 'Problem! Status Code: ' + response.status );
            return;
        }

        return response.json();
    })
    .then ( theData => {
        model.render( theData );
    })
    .catch( function( err ) {
        console.log( 'Error: ', err );
    });
 }

/**
 * firebaseInit - Initialize the firebase db
 *
 * @return {Object} firestore
 */
data.firebaseInit = function () {
  firebase.initializeApp( firebaseConfig ); 
}

export default data;