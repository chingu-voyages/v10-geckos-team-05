/**
 * View file for displaying content
 */
import model from './model';

/**
  * Main view object
  *
  */
let view = {};

/**
  * Calls initial View methods
  *
  */

view.init = function () {
   view.createItems();
}

/**
 * createList - Displays data items on page
 *
 * @returns {void}
 */
view.createItems = function( ) {
  let cakes = model.getObject();

  for ( let cake of cakes ) {
    view.addToList( cake );
  }
};

/**
 * createList - Displays data items on page
 * 
 * @param {String} cake The type of cake
 * @returns {void}
 */
view.addToList = function( cake ) {
  const appRoot = document.getElementById('root'),
        listItem = document.createElement( 'li' );

	listItem.innerHTML = 'Cake: ' + cake.type;

	appRoot.appendChild( listItem );
};

export default view;