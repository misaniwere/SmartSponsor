'use strict';

$(document).ready(function() {
  $(function(){
    var socket = io.connect();
    var $messageForm = $('#messageForm');
    var $message = $('#message');
    var $messageArea = $('#messageArea');
    var $chat = $('#chat');
    var $userFormArea = $('#userFormArea');
    var $userForm = $('#userForm');
    var $users = $('#users');
    var $username = $('#username');
    var $globalusername;


    $userForm.submit(function(e){
      var url = window.location.search;
      var getUserType = url.split('userType=')[1];

      e.preventDefault();
      var username = $username.val();
      window.globalusername = $username.val();
      $('#welcome-container').append(window.globalusername);
      console.log('username entered is ' + username);
      var userFormData = $('#userForm').serialize();

      socket.emit('new user', username, function(data){
        if(data){

          $.post('/chatUser?userType='+getUserType,userFormData, function(chatBotMsg){
              $chat.append('<div class="card"><strong>'+'Bot'+'</strong>' +chatBotMsg.output.text+ '</div>');
        });
          $userFormArea.hide();
          $messageArea.show();
        }
      });
      $username.val('');
    });


    $messageForm.submit(function(e){
      e.preventDefault();
      socket.emit('send message', $message.val());

      var msgFormData = $('#messageForm').serialize();

      $message.val('');

      var counter = 0;

      var display_message = function(data){
        $chat.append('<div class="card '+ data.msg + " " + counter +'"><strong>'+data.user+'</strong>' +data.msg+ '</div>');
        counter++;
        var shouldhide = $(':not.0, .card');
        shouldhide.hide();

      };

      socket.on('new message', display_message);

      console.log("username is " + globalusername);

      $.post('/chatMsg?user='+window.globalusername, msgFormData, function(chatBotMsg){
          $chat.append('<div class="card"><strong>'+'Bot'+'</strong>' +chatBotMsg.output.text+ '</div>');
          if(chatBotMsg.output.text[0] === "Nice! Welcome to Canada. Please click the button so you can choose your potential mentor!"){
              $('#pick-matches').show();
              $messageForm.hide();
            }
          if(chatBotMsg.output.text[0] === "Thanks. Please wait while we match you with your mentee!"){
              $('#see-matches').show();
              $messageForm.hide();
            }
      });
    });


    $('#see-matches').click(function() {
        window.location.replace('/mentor');
    });

    $('#pick-matches').click(function() {
        window.location.replace('/mentee');
    });

  });
})
