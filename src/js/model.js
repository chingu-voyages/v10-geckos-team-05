/**
 * Model file for working with data
 */
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
    data.init();
}

/**
 * renderData - returns the data from the fetch call
 *
 *  @return {Object} data
 */
model.render = function( data ) {
    console.log( data );
    console.log( data.info );
};

export default model;