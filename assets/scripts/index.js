'use strict';

$(document).ready(function() {
  $('#mentee-button').click(function() {
    window.location.replace('/chat?userType=mentee');
  });

  $('#mentor-button').click(function() {
    window.location.replace('/chat?userType=mentor');
  });

})
