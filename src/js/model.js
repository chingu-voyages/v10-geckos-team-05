/**
 * Model file for working with data
 */
import config from './config';
import data from './data';

/**
 * Main Model Object
 *
 */

let model = {};

/**
 * Initializes the model
 *
 */
model.init = function() {
    console.log( 'API root: ' + config.apiRoot );
    console.log( 'API key: ' + config.apiKey );
}

/**
 * renderData - Display called data
 *
 *  @return {Object} data
 */
model.getObject = function( ) {
    let dataObject = data;

    return dataObject;
};

export default model;