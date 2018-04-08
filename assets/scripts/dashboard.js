'use strict';

function handleClickOnInfluencer(){
    $('.card').click(function(){
      var id = this.id;
        window.location.replace('/influencerPage?name='+id);
    });
}

/* Set up the page */
$( document ).ready(function (){
    handleClickOnInfluencer();

})
