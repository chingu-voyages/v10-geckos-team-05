/**
 * Model file for working with data
 */
import data from './data';
import helpers from './helpers';
import view from './view';

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
    model.discoverPaintings();
    data.firebaseInit();
    model.submitForm();
}

/**
 * renderData - returns the data from the fetch call
 *
 *  @return {Object} data
 */
model.render = function( data ) {
    let collection = data.records;
    let sizeString = '?height=600&width=600';

    console.log( collection );

    // TODO: If image array is 0, new result
    for ( let item of collection ) {

        if ( item.images === undefined || item.images.length == 0 ) {
            view.clearData();
            data.init();
        }

        let painting = item.images[0].baseimageurl + sizeString;
        view.displayImage( painting );

        let credit = item.creditline;
        let description = item.title;

        view.addAltTag( credit );
        view.displayDescription( description );
    }  
};

/**
 * discoverPaintings - event listener to pull new painting
 */
model.discoverPaintings = function( ) {
    let discoverBtn = document.getElementById( 'discoverBtn' );
    discoverBtn.addEventListener( 'click', view.reloadImage );
};

/**
 * submitForm - event listener to process impressions
 */
model.submitForm = function( ) {
    let submitButton = document.querySelector( '#submit' );
    submitButton.addEventListener( 'click', model.processForm );
};

/**
 * processForm - push the data to the database
 */
model.processForm = function( e ) {
    e.preventDefault();
    
    let firestore = firebase.firestore();
    let docRef = firestore.doc( 'impressions/testDoc' );
    let commentEl = helpers.getCommentEl();
    let commentToSave = commentEl.value;

    docRef.set({
        comment: commentToSave
    }).catch(function(err){
        console.log( 'Error!' );
    });

    view.displayImpression( commentToSave, docRef );
};


export default model;