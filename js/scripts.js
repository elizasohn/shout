$(document).ready(function(){

  $("form#inputForm").submit(function(event){
    var userStringInput = $("input#userString").val();

    userStringInput = userStringInput.toUpperCase();

    $(".shoutedText").text(userStringInput);

    $("#fieldthing").show();
    
    event.preventDefault();

  });

});
