
$(document).ready(function(e) {
   $( "form" ).on( "submit", function( event ) {

  console.log( $( this ).serialize() );
  var fromdata = JSON.stringify($( this ).serializeArray());
  $.ajax({
  method: "POST",
   url: "input.php",
  data:{ "data":fromdata}
});

return false;
}); 
});

