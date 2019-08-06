/**
 * View file for displaying content
 */
import model from './model';
import helpers from './helpers';
import data from './data';

/**
  * Main view object
  */
let view = {};

/**
  * Calls initial View methods
  */

view.init = function () {

}

/**
 * displayImage - replaces the placeholder and adds image to page
 */
view.displayImage = function( painting ) {
  let museumImage = helpers.getMuseumImg();

  museumImage.setAttribute( 'src', painting );
};

/**
 * addAltTag - replaces the placeholder alt tag
 */
view.addAltTag = function( credit ) {
  let museumImage = helpers.getMuseumImg();

  museumImage.setAttribute( 'alt', credit );
};

/**
 * addImageSrc - replaces the placeholder image source
 */
view.addImageSrc = function( imgSrc ) {
  let imgLink = document.getElementById( 'imageSrc' );

  imgLink.setAttribute( 'href', imgSrc );
};


/**
 * reloadImage - serves a new image by reloading the fetch
 */
view.reloadImage = function( e ) {
  e.preventDefault();
  view.clearData();
  data.init();
};

/**
 * displayImpression - renders impression
 */
view.displayImpression = function( commentToSave, docRef ) {
  let commentOutput = helpers.getCommentOutput();

  docRef.onSnapshot( function( doc ) {
    if ( doc && doc.exists ) {
      const myData = doc.data();
      commentOutput.innerText = myData.comment;
    }
  });
};

/**
 * displayDescription - renders paitning title
 */
view.displayDescription = function( description ) {
  let imageDescription = document.getElementById( 'title' );

  imageDescription.innerHTML = description;
};

/**
 * clearData - remove past impression
 */
view.clearData = function( ) {
  let commentOutput = helpers.getCommentOutput();
  let commentEl = helpers.getCommentEl();

  commentOutput.innerHTML = '';
  commentEl.value = '';
}

export default view;