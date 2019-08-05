/**
 * Helper file for extra helper functions
 */

var helpers = {};

helpers.getCommentEl = function() {
    return document.querySelector( '#comment' );
}

helpers.getCommentOutput = function() {
    return document.querySelector( '#commentSaved' );
}

export default helpers;
 