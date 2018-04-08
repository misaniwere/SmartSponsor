'use strict';

function adjustPictures(){
    $('iframe').contents().find('img').css({'max-width': '100%', 'max-height': '100%'});
}

/* Set up the page */
$( document ).ready(function (){
    adjustPictures();

})
