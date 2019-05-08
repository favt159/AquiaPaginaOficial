$(document).ready(function() {
  $('#botonone').on('click', function(){
      $.ajax({
          type: "GET",
          url: "costumbres-danzas.php",
          success: function(response) {
              $('#content').html(response);
          }
      });
  });

  $('#boton').on('click', function(){
      $.ajax({
          type: "GET",
          url: "lugares-turisticos.php",
          success: function(response) {
              $('#content').html(response);
          }
      });
  });
});
