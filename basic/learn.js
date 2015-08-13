
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

<<<<<<< HEAD


=======
>>>>>>> 37099144061ad4e1e9639465518db10a17a4df9a
