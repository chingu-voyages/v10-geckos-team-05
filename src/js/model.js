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
    let collection = data.records;

    console.log( collection );

    for ( let item of collection ) {
        console.log( 'division: ' + item.division );
        console.log( 'year: ' + item.accessionyear );
        console.log( 'century: ' + item.century );

        for ( let image of item.images ) {
            console.log( 'image url:' + image.baseimageurl + '?height=150&width=150' );
        }
    }
};

export default model;